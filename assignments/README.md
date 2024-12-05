# Custom Table, Form, and Date Picker in React

This project demonstrates three custom React components: **Custom Table Component**, **Custom Form System**, and **Custom Date Picker**. Each component is implemented with advanced functionality and React best practices, including state management, dynamic styling, and modular design.

## Live Demo

The project is deployed on Netlify.  
🔗 [Live Demo](https://glittering-choux-c1130a.netlify.app/)

---

## Features

### Custom Table Component
- **Sorting:** 
  - Allows sorting by columns in ascending, descending, or default order with visual indicators.
- **Filtering:** 
  - Column-specific filtering with search inputs.
- **Dynamic Styling:** 
  - Customizable font size, background color, and font color for the header and body.
- **Pagination (Bonus):**
  - Displays data with client-side pagination for better performance.

### Custom Form System
- **Dynamic Form Rendering:**
  - Supports multiple input types: text, textarea, dropdown, checkbox, radio buttons, switch, and date input.
- **Validation:**
  - Real-time validation for required fields, min/max length, and pattern matching (e.g., email format).
- **Custom Styling:**
  - Easily customizable font size, font color, and background color via props.
- **Reset Button:**
  - Clears all fields to their initial state.

### Custom Date Picker with Presets
- **Preset Options:**
  - Today, Yesterday, This Month, Last Month.
- **Custom Range Picker:**
  - Users can select a custom "From" and "To" date with validation.
- **Dynamic Styling:**
  - Customizable appearance for preset buttons and date inputs.
- **State Management:**
  - Efficiently manages selected dates and ranges using `useState`.
  - 

---

## git clone https://github.com/aanurag007/pet-Pooja.git
# cd assignments


## File Structure

```plaintext
src/
├── components/
│   ├── table/                 # Components for Custom Table
│   │   ├── TableContainer.jsx
│   │   ├── TableHeader.jsx
│   │   ├── TableBody.jsx
│   │   ├── FilterInput.jsx
│   ├── form/                  # Components for Custom Form
│   │   ├── FormContainer.jsx
│   │   ├── FormField.jsx
│   │   ├── ValidationMessage.jsx
│   │   ├── Button.jsx
│   ├── datepicker/            # Components for Custom Date Picker
│   │   ├── DatePickerContainer.jsx
│   │   ├── PresetButtons.jsx
│   │   ├── CustomDateRange.jsx
│   │   ├── DateInput.jsx
├── pages/                     # Pages for each assignment
│   ├── TablePage.jsx
│   ├── FormPage.jsx
│   ├── DatePickerPage.jsx
├── styles/                    # CSS files for styling components
│   ├── Table.css
│   ├── Form.css
│   ├── DatePicker.css
├── App.jsx                    # Main app component
├── index.js                   # Entry point
├── .env                       # Environment variables
└── public/
    ├── index.html             # HTML file for deployment
    ├── _redirects             # Netlify redirect configuration


 
