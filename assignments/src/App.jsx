import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TablePage from "./pages/TablePage";
import FormPage from "./pages/FormPage";
import DatePickerPage from "./pages/DatePickerPage";
import './components/styles/App.css'
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Table</a></li>
            <li><a href="/form">Form</a></li>
            <li><a href="/datepicker">Date Picker</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TablePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/datepicker" element={<DatePickerPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
