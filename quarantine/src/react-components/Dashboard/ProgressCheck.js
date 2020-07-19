import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const birthdayStyle = `.DayPicker-Day--highlighted {
    background-color: orange;
    color: white;
  }`;

const highlighted = {
  from: new Date(2020, 6, 1),
  to: new Date(2020, 6, 2),
};

const passed = {
  from: new Date(2020, 6, 3),
  to: new Date(2020, 6, 14),
};
const modifiers = {
  highlighted,
  passed,
};

const modifiersStyles = {
  passed: {
    color: "#ffc107",
    backgroundColor: "#fffdee",
  },
  highlighted: {
    color: "#03910c",
    backgroundColor: "#9aedb0",
  },
};

export default function ProgressCheck() {
  return (
    <div>
      {/* <style>{birthdayStyle}</style> */}
      <DayPicker modifiers={modifiers} modifiersStyles={modifiersStyles} />
    </div>
  );
}
