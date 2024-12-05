import React from "react";
import DatePickerContainer from "../components/datepicker/DatePickerContainer";

const DatePickerPage = () => {
  const handleDateChange = (selectedDateRange) => {
    console.log("Selected Date Range:", selectedDateRange);
  };

  return (
    <div className="datepicker-page">
      <h1>Custom Date Picker</h1>
      <DatePickerContainer onDateChange={handleDateChange} />
    </div>
  );
};

export default DatePickerPage;
