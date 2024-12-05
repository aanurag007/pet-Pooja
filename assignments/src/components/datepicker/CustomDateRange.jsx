import React from "react";
import DateInput from "./DateInput";

const CustomDateRange = ({ customRange, onRangeChange }) => {
  const handleFromDateChange = (date) => {
    if (new Date(date) > new Date(customRange.to)) {
      alert("'From' date cannot be later than 'To' date.");
      return;
    }
    onRangeChange({ ...customRange, from: new Date(date) });
  };

  const handleToDateChange = (date) => {
    if (new Date(date) < new Date(customRange.from)) {
      alert("'To' date cannot be earlier than 'From' date.");
      return;
    }
    onRangeChange({ ...customRange, to: new Date(date) });
  };

  return (
    <div className="custom-date-range">
      <DateInput
        label="From"
        value={customRange.from}
        onChange={handleFromDateChange}
      />
      <DateInput
        label="To"
        value={customRange.to}
        onChange={handleToDateChange}
      />
    </div>
  );
};

export default CustomDateRange;
