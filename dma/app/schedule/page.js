"use client";

import "./schedule.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../components/modal/modal";

const ClassesPage = () => {
  const [classesData, setClassesData] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDays, setSelectedDays] = useState({
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
  });
  const [modalData, setModalData] = useState(null); // State for modal data
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchData = async () => {
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
      setClassesData(data.rows);
      setFilteredClasses(data.rows);
      console.log(data);
    };

    fetchData();
  }, []);

  const handleDayChange = (e) => {
    setSelectedDays({
      ...selectedDays,
      [e.target.name]: e.target.checked,
    });
  };

  const parseAgeToMonths = (age) => {
    const yearsMatch = age.match(/P(\d+)Y/);
    const monthsMatch = age.match(/(\d+)M/);
    const years = yearsMatch ? parseInt(yearsMatch[1]) : 0;
    const months = monthsMatch ? parseInt(monthsMatch[1]) : 0;
    return years * 12 + months;
  };

  const parseInputAgetoMonths = (age) => {
    return age * 12;
  };

  const twelveHour = (time) => {
    const [hours, minutes] = time.split(":");
    const suffix = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes} ${suffix}`;
  };

  const filterClasses = () => {
    let filtered = classesData;

    if (minAge) {
      const minMonths = parseInputAgetoMonths(minAge);
      filtered = filtered.filter(
        (row) => parseAgeToMonths(row.min_age) >= minMonths
      );
    }

    if (maxAge) {
      const maxMonths = parseInputAgetoMonths(maxAge);
      filtered = filtered.filter(
        (row) => parseAgeToMonths(row.max_age) <= maxMonths
      );
    }

    if (selectedDate) {
      filtered = filtered.filter((row) => row.start_date === selectedDate);
    }

    if (Object.values(selectedDays).includes(true)) {
      filtered = filtered.filter((row) => {
        return Object.keys(selectedDays).some(
          (day) => selectedDays[day] && row.meeting_days[day]
        );
      });
    }

    setFilteredClasses(filtered);
  };

  useEffect(() => {
    filterClasses();
  }, [minAge, maxAge, selectedDate, selectedDays]);

  const openModal = (classData) => {
    setModalData(classData); // Set the class data for the modal
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  if (!classesData.length) {
    return (
      <div className="d-flex justify-content-center page-body">
        <div className="spinner-border" role="output">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className=" page-body d-flex flex-column">
      <h1>Class Listings</h1>

      {/* Filters */}
      <div>
        <label htmlFor="min-age">Min Age: </label>
        <input
          type="number"
          id="min-age"
          value={minAge}
          onChange={(e) => setMinAge(e.target.value)}
        />
        <label htmlFor="max-age">Max Age: </label>
        <input
          type="number"
          id="max-age"
          value={maxAge}
          onChange={(e) => setMaxAge(e.target.value)}
        />
        {/* <label htmlFor="date">Start Date: </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        /> */}
        <div>
          <h3>Filter by Days of the Week:</h3>
          {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => (
            <label key={day}>
              <input
                type="checkbox"
                name={day}
                checked={selectedDays[day]}
                onChange={handleDayChange}
              />
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Classes Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Fee</th>
            {/* <th>Age Range</th> */}
            <th>Days</th>
            <th>Register</th>
          </tr>
        </thead>
        <tbody>
          {filteredClasses.length > 0 ? (
            filteredClasses.map((row, index) => {
              // Extract the preLoadClassID value from the online_reg_link
              const match = row.online_reg_link.match(/preLoadClassID=(\d+)/);
              const preLoadClassID = match ? match[1] : null;

              // Generate the registration link
              const registrationLink = preLoadClassID
                ? `https://app.jackrabbitclass.com/regv2.asp?id=546238&preLoadClassID=${preLoadClassID}`
                : "#";

              // Determine the button label
              const buttonLabel =
                row.openings.calculated_openings > 0 ? "Register" : "Wait List";

              return (
                <tr
                  key={index}
                  onClick={() => openModal(row)}
                  className="class-row"
                >
                  <td>
                    <div id="class-name">{row.name || "N/A"}</div>
                  </td>
                  <td>{`${row.category2 || ""}`}</td>
                  {/* <td>{`${row.category1 || ""} / ${row.category2 || ""}`}</td> */}
                  <td>{twelveHour(row.start_time) || "N/A"}</td>
                  <td>{twelveHour(row.end_time) || "N/A"}</td>
                  <td>${(row.tuition.fee || 0).toFixed(2)}</td>
                  {/* <td>{`${row.min_age || "N/A"} - ${row.max_age || "N/A"}`}</td> */}
                  <td>
                    {Object.keys(row.meeting_days)
                      .filter((day) => row.meeting_days[day])
                      .join(", ")
                      .toUpperCase() || "N/A"}
                  </td>
                  <td>
                    {preLoadClassID ? (
                      <a
                        href={registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>{buttonLabel}</button>
                      </a>
                    ) : (
                      <button>Contact us to register</button>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="8">
                No classes available based on the selected filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        classDetails={modalData}
      />
    </div>
  );
};

export default ClassesPage;
