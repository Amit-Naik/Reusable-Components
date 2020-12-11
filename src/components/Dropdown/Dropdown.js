import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";
import Arrow from "../Arrow/Arrow";

const Dropdown = ({ months }) => {
  const [selectedMonth, setSelectedMonth] = useState(months[0].month);
  const [direction, setDirection] = useState("Up");

  return (
    <div className={styles.Dropdown} onMouseOver={
      (event) => {
          event.stopPropagation()
          setDirection("Down");
        }
    }
      onMouseOut={
        (event) => {
          event.stopPropagation()
          setDirection("Up");
        }
      }
    >
      <button
        className={styles.dropbtn}>
        <div className={styles.box}>
          {selectedMonth}
          <div
            className={
              direction === "Down" ? styles.arrowDownSize : styles.arrowUpSize
            }
          >
            <Arrow direction={direction} />
          </div>
        </div>
      </button>
      <div className={styles.dropDownContent}>
        {months.map((month) => {
          return (
            <p
              className={styles.dropDownValue}
              key={month.id}
              onClick={() => setSelectedMonth(month.month)}
            >
              {month.month}
            </p>
          );
        })}
      </div>
    </div>
  );
};

Dropdown.propTypes = {};

export default Dropdown;
