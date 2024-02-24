import React, { useEffect, useState } from "react";
import "./Table.scss";
import { subscribe, unsubscribe } from "../../utils/event";

const TableComponent = () => {
  const [data, setData] = useState([]);
  // const data = [
  //   { Name: "Beth Smith", Class: "English", School: "Harvard", State: "MA" },
  //   { Name: "Beth Smith", Class: "Math", School: "Harvard", State: "MA" },
  //   { Name: "Rahul Shankar", Class: "Physics", School: "Stanford", State: "CA" },
  //   { Name: "Rahul Shankar", Class: "Chemistry", School: "Stanford", State: "CA" },
  // ];

  useEffect(() => {
    const gotDataHandler = (e) => {
      setData(e.detail);
    };
    subscribe("gotData", gotDataHandler);
    return () => {
      unsubscribe("gotData", gotDataHandler);
    };
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>School</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row?.Name || "-"}</td>
                  <td>{row?.Class || "-"}</td>
                  <td>{row?.School || "-"}</td>
                  <td>{row?.State || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};

export default TableComponent;
