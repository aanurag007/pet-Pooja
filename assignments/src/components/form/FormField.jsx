import React from "react";
import ValidationMessage from "./ValidationMessage";

const FormField = ({ field, value, error, onChange }) => {
  const renderField = () => {
    switch (field.type) {
      case "text":
      case "email":
      case "date":
        return (
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={value}
            onChange={(e) => onChange(field.name, e.target.value)}
          />
        );
      case "textarea":
        return (
          <textarea
            name={field.name}
            placeholder={field.placeholder}
            value={value}
            onChange={(e) => onChange(field.name, e.target.value)}
          />
        );
      case "select":
        return (
          <select
            name={field.name}
            value={value}
            onChange={(e) => onChange(field.name, e.target.value)}
          >
            <option value="">Select...</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return field.options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              name={field.name}
              value={option}
              checked={value?.includes(option)}
              onChange={(e) => {
                const newValue = value ? [...value] : [];
                if (e.target.checked) {
                  newValue.push(option);
                } else {
                  newValue.splice(newValue.indexOf(option), 1);
                }
                onChange(field.name, newValue);
              }}
            />
            {option}
          </label>
        ));
      case "radio":
        return field.options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={field.name}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(field.name, e.target.value)}
            />
            {option}
          </label>
        ));
      case "switch":
        return (
          <label>
            <input
              type="checkbox"
              checked={!!value}
              onChange={(e) => onChange(field.name, e.target.checked)}
            />
            {field.label}
          </label>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-field">
      <label>{field.label}</label>
      {renderField()}
      {error && <ValidationMessage message={error} />}
    </div>
  );
};

export default FormField;
