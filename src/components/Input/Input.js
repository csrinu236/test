import React, { useState } from "react";
import "./Input.scss";
import Papa from "papaparse";
import { publish } from "../../utils/event";

const Input = () => {
  const [data, setData] = useState([]);
  const changeHanlder = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      complete: function (results) {
        // setData(results.data);
        // console.log(results.data);
        publish("gotData", results.data);
      },
    });
  };
  return <input className="input" type="file" accept=".csv" onChange={changeHanlder} />;
};

export default Input;
