import React, { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";
import "../styles/Form.css";

const FormContainer = ({ config, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const validateField = (name, value) => {
    const fieldConfig = config.find((field) => field.name === name);
    const { validation } = fieldConfig || {};

    if (validation?.required && !value) {
      return `${fieldConfig.label} is required.`;
    }
    if (validation?.minLength && value.length < validation.minLength) {
      return `${fieldConfig.label} must be at least ${validation.minLength} characters.`;
    }
    if (validation?.pattern && !validation.pattern.test(value)) {
      return `Invalid ${fieldConfig.label}.`;
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    config.forEach((field) => {
      const error = validateField(field.name, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleReset = () => {
    setFormData({});
    setErrors({});
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {config.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={formData[field.name] || ""}
          error={errors[field.name]}
          onChange={handleChange}
        />
      ))}
      <div className="form-actions">
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default FormContainer;
