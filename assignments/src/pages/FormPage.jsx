import React from "react";
import FormContainer from "../components/form/FormContainer";

const formConfig = [
  {
    type: "text",
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
    validation: { required: true, minLength: 3 },
  },
  {
    type: "email",
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    validation: { required: true, pattern: /^\S+@\S+\.\S+$/ },
  },
  {
    type: "textarea",
    label: "Message",
    name: "message",
    placeholder: "Enter your message",
    validation: { required: true, minLength: 10 },
  },
  {
    type: "select",
    label: "Country",
    name: "country",
    options: ["India", "USA", "Canada"],
    validation: { required: true },
  },
  {
    type: "checkbox",
    label: "Interests",
    name: "interests",
    options: ["Sports", "Reading", "Traveling"],
    validation: { required: true },
  },
  {
    type: "radio",
    label: "Gender",
    name: "gender",
    options: ["Male", "Female", "Other"],
    validation: { required: true },
  },
  {
    type: "date",
    label: "Birth Date",
    name: "birthDate",
    validation: { required: true },
  },
  {
    type: "switch",
    label: "Subscribe to Newsletter",
    name: "subscribe",
  },
];

const FormPage = () => {
  const handleSubmit = (formData) => {
    console.log("Form Submitted: ", formData);
  };

  return (
    <div className="form-page">
      <h1>Dynamic Custom Form</h1>
      <FormContainer config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default FormPage;
