import React from "react";

const TableBody = ({ data, columns, styles }) => {
  return (
    <tbody style={{ backgroundColor: styles.bodyBg, color: styles.bodyColor }}>
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((col) => (
            <td key={col.key} style={{ fontSize: styles.fontSize }}>
              {row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
