import React from "react";

const TimelineC = ({ timelineC }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Product</th>
            <th>Qty</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {timelineC.map((row, index) => (
            <tr key={index}>
              {row.map((entry, entryIndex) => (
                <td key={entryIndex}>{entry}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimelineC;
