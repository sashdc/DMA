import React from 'react';

const Modal = ({ isOpen, onClose, classDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{classDetails.name}</h2>
        <p><strong>Category:</strong> {`${classDetails.category1} / ${classDetails.category2}`}</p>
        <p><strong>Location:</strong> {classDetails.location_name}</p>
        <p><strong>Start Date:</strong> {classDetails.start_date}</p>
        <p><strong>End Date:</strong> {classDetails.end_date}</p>
        <p><strong>Fee:</strong> ${classDetails.fee}</p>
        <p><strong>Age Range:</strong> {classDetails.min_age} - {classDetails.max_age}</p>
        <p><strong>Description:</strong> {classDetails.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
