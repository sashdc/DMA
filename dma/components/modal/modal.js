import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, classDetails }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 300); // Match CSS animation duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? "fade-in" : "fade-out"}`}
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="">{classDetails?.name}</h3>
        {/* <p><strong>Category:</strong> {`${classDetails?.category1} / ${classDetails?.category2}`}</p> */}
        {/* <p><strong>Location:</strong> {classDetails?.location_name}</p> */}
        {/* <p><strong>Start Date:</strong> {classDetails?.start_date}</p> */}
        {/* <p><strong>End Date:</strong> {classDetails?.end_date}</p> */}
        <p><strong>Instructor:</strong>{classDetails?.instructors[0]}</p>
        <p><strong>Age Range:</strong> {classDetails?.min_age} - {classDetails?.max_age}</p>
        <p><strong>Fee:</strong> ${classDetails?.tuition.fee}</p>

        <p><strong>Description:</strong> {classDetails?.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
