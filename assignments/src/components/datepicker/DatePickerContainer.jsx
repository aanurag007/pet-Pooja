import React, { useState } from "react";
import PresetButtons from "./PresetButtons";
import CustomDateRange from "./CustomDateRange";
import "../styles/DatePicker.css";

const DatePickerContainer = ({ onDateChange }) => {
  const [selectedPreset, setSelectedPreset] = useState("Today");
  const [customRange, setCustomRange] = useState({ from: null, to: null });

  const handlePresetSelection = (preset) => {
    const today = new Date();
    let range = {};

    switch (preset) {
      case "Today":
        range = { from: today, to: today };
        break;
      case "Yesterday":
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        range = { from: yesterday, to: yesterday };
        break;
      case "This Month":
        range = {
          from: new Date(today.getFullYear(), today.getMonth(), 1),
          to: new Date(today.getFullYear(), today.getMonth() + 1, 0),
        };
        break;
      case "Last Month":
        range = {
          from: new Date(today.getFullYear(), today.getMonth() - 1, 1),
          to: new Date(today.getFullYear(), today.getMonth(), 0),
        };
        break;
      default:
        break;
    }

    setSelectedPreset(preset);
    setCustomRange(range);
    onDateChange(range);
  };

  const handleCustomRangeChange = (range) => {
    setSelectedPreset("Custom Range");
    setCustomRange(range);
    onDateChange(range);
  };

  return (
    <div className="datepicker-container">
      <PresetButtons
        selectedPreset={selectedPreset}
        onSelect={handlePresetSelection}
      />
      {selectedPreset === "Custom Range" && (
        <CustomDateRange
          customRange={customRange}
          onRangeChange={handleCustomRangeChange}
        />
      )}
      <div className="selected-range">
        <strong>Selected Range:</strong> {customRange.from?.toLocaleDateString()}{" "}
        - {customRange.to?.toLocaleDateString()}
      </div>
    </div>
  );
};

export default DatePickerContainer;
