import React from "react";

const DateInput = ({ label, value, onChange }) => {
  return (
    <div className="date-input">
      <label>{label}</label>
      <input
        type="date"
        value={value ? value.toISOString().split("T")[0] : ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default DateInput;
