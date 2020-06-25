import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const birthdayStyle = `.DayPicker-Day--highlighted {
    background-color: orange;
    color: white;
  }`;

const highlighted = {
  from: new Date(2020, 5, 12),
  to: new Date(2020, 5, 25),
};

const modifiers = {
  highlighted,
};

export default function ProgressCheck() {
  return (
    <div>
      <style>{birthdayStyle}</style>
      <DayPicker modifiers={modifiers} />
    </div>
  );
}
