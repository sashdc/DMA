'use client';

// pages/classes.js
import './schedule.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassesPage = () => {
  const [classesData, setClassesData] = useState([]);

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
      setClassesData(data.rows); // Assuming the data comes in 'rows' array
    };

    fetchData();
  }, []);

  if (!classesData.length) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div>
      <h1>Class Listings</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Fee</th>
            <th>Age Range</th>
          </tr>
        </thead>
        <tbody>
          {classesData.map((row, index) => (
            <tr key={index}>
              <td>{row.name || "N/A"}</td>
              <td>{`${row.category1 || ''} / ${row.category2 || ''}`}</td>
              <td>{row.location_name || "N/A"}</td>
              <td>{row.start_date || "N/A"}</td>
              <td>{row.end_date || "N/A"}</td>
              <td>${(row.fee || 0).toFixed(2)}</td>
              <td>{`${row.min_age || "N/A"} - ${row.max_age || "N/A"}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassesPage;
