import React from "react";

const presets = ["Today", "Yesterday", "This Month", "Last Month", "Custom Range"];

const PresetButtons = ({ selectedPreset, onSelect }) => {
  return (
    <div className="preset-buttons">
      {presets.map((preset) => (
        <button
          key={preset}
          className={preset === selectedPreset ? "active" : ""}
          onClick={() => onSelect(preset)}
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;
