import React, { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "../styles/Table.css";

const TableContainer = ({ data, columns, styles }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [filterValues, setFilterValues] = useState({});

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (key, value) => {
    setFilterValues((prev) => ({ ...prev, [key]: value.toLowerCase() }));
  };

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      columns.every((col) =>
        col.filterable && filterValues[col.key]
          ? String(row[col.key])
              .toLowerCase()
              .includes(filterValues[col.key])
          : true
      )
    );
  }, [data, columns, filterValues]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "ascending" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  return (
    <div className="table-container">
      <table>
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          onSort={handleSort}
          onFilterChange={handleFilterChange}
          styles={styles}
        />
        <TableBody data={sortedData} columns={columns} styles={styles} />
      </table>
    </div>
  );
};

export default TableContainer;
