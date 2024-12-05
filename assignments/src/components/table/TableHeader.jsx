import React from "react";
import FilterInput from "./FilterInput";

const TableHeader = ({ columns, sortConfig, onSort, onFilterChange, styles }) => {
  return (
    <thead>
      <tr style={{ backgroundColor: styles.headerBg, color: styles.headerColor }}>
        {columns.map((col) => (
          <th key={col.key} style={{ fontSize: styles.fontSize }}>
            <div className="header-cell">
              <span
                className="sortable"
                onClick={() => col.sortable && onSort(col.key)}
              >
                {col.title}
                {col.sortable && (
                  <span className="sort-indicator">
                    {sortConfig.key === col.key
                      ? sortConfig.direction === "ascending"
                        ? " ▲"
                        : " ▼"
                      : " ⇅"}
                  </span>
                )}
              </span>
              {col.filterable && (
                <FilterInput columnKey={col.key} onFilterChange={onFilterChange} />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
