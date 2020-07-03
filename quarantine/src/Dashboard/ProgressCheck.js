import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const birthdayStyle = `.DayPicker-Day--highlighted {
    background-color: orange;
    color: white;
  }`;

const highlighted = {
  from: new Date(2020, 6, 1),
  to: new Date(2020, 6, 14),
};

const modifiers = {
  highlighted,
};

const modifiersStyles = {
  highlighted: {
    color: "#ffc107",
    backgroundColor: "#fffdee",
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
