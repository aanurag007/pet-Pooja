import React from "react";
import TableContainer from "../components/table/TableContainer";
import "../components/styles/Table.css";

const tableData = [
  { id: 1, name: "Alice", age: 25, score: 80 },
  { id: 2, name: "Bob", age: 30, score: 90 },
  { id: 3, name: "Charlie", age: 22, score: 70 },
  { id: 4, name: "David", age: 35, score: 85 },
];

const tableColumns = [
  { title: "ID", key: "id", sortable: true, filterable: true },
  { title: "Name", key: "name", sortable: true, filterable: true },
  { title: "Age", key: "age", sortable: true, filterable: true },
  { title: "Score", key: "score", sortable: true, filterable: true },
];

const TablePage = () => {
  return (
    <div className="table-page">
      <h1>Custom Table Component</h1>
      <TableContainer
        data={tableData}
        columns={tableColumns}
        styles={{
          headerBg: "#007bff",
          headerColor: "white",
          bodyBg: "#f8f9fa",
          bodyColor: "#212529",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default TablePage;
