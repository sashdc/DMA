'use client';

import { useEffect, useState } from "react";
import './style.css'
import axios from "axios";

const convertTime24to12 = (time) => {
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  if (time.length > 1) {
    time = time.slice(1); 
    time[5] = +time[0] < 12 ? " AM" : " PM"; 
    time[0] = +time[0] % 12 || 12; 
  }
  return time.join("");
};

const convertAgeString = (ageString) => {
  ageString = ageString.substr(1); 
  const ageParts = ageString.match(/.{1,3}/g).map((part) => part.replace(/^0+/, "").slice(0, -1));
  return parseInt(ageParts[0], 10) + parseInt(ageParts[1], 10) / 12;
};

export default function Schedule2() {
  const [classes, setClasses] = useState([]);
  const [classType, setClassType] = useState("");
  const [ageFilter, setAgeFilter] = useState(null);
  const [dayFilters, setDayFilters] = useState({
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: true,
    sun: true,
  });
  const [waitlistFilter, setWaitlistFilter] = useState(false);

  const filterAge = (item) => {
    if (!ageFilter) return item;
    const min = item.min_age ? item.min_age : 0;
    const max = item.max_age ? item.max_age : 999;
    return ageFilter >= min && ageFilter <= max ? item : null;
  };

  const filterDay = (item) => {
    return Object.entries(dayFilters).some(
      ([day, isEnabled]) => isEnabled && item.meeting_days.daylist.includes(day)
    )
      ? item
      : null;
  };

  const filterWaitlist = (item) => {
    return item.openings.calculated_openings > 0 || waitlistFilter ? item : null;
  };

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const { data } = await axios.get(
          "https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJSON",
          {
            params: {
              OrgId: "546238",
              Status: "Active",
              ShowClosed: 1,
            },
          }
        );
        console.log(data);
        const processedData = data.rows.map((item) => {
          item.start_time = convertTime24to12(item.start_time);
          item.end_time = convertTime24to12(item.end_time);
          if (item.min_age) item.min_age = convertAgeString(item.min_age);
          if (item.max_age) item.max_age = convertAgeString(item.max_age);
          item.meeting_days.daylist = Object.keys(item.meeting_days).filter(
            (key) => item.meeting_days[key]
          );
          item.online_reg_link = item.online_reg_link.replaceAll("&amp;", "&");
          return item;
        });
        setClasses(processedData);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
  }, []);

  const filteredClasses = classes
    .filter((item) => filterAge(item))
    .filter((item) => filterDay(item))
    .filter((item) => filterWaitlist(item));

  return (
    <div>
      <h1>Class Openings</h1>
      <div>
        {/* Example of filtered data rendering */}
        {filteredClasses.map((classItem, index) => (
          <div key={index}>
            <h2>{classItem.class_name}</h2>
            <p>Time: {classItem.start_time} - {classItem.end_time}</p>
            <p>Min Age: {classItem.min_age}, Max Age: {classItem.max_age}</p>
            <a href={classItem.online_reg_link}>Register</a>
          </div>
        ))}
      </div>
    </div>
  );
}
