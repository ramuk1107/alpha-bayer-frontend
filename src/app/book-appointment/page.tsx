"use client";
import Link from "next/link";
import classes from "./page.module.css";
import { time } from "console";
import { title } from "process";
import Image from "next/image";
import { useState } from "react";

const HEALTH_TIPS_CONSTANT = [
  {
    title: "COVID-19 Updates",
    description:
      "Stay informed about the latest COVID-19 guidelines and vaccination information.",
  },
  {
    title: "Heart Health",
    description:
      "Discover tips and information for maintaining a healthy heart and cardiovascular system.",
  },
  {
    title: "Mental Wellness",
    description:
      "Explore resources and support options for maintaining good mental health.",
  },
  {
    title: "Nutrition & Diet",
    description:
      "Learn about balanced nutrition and healthy eating habits for overall wellbeing.",
  },
];

const DOCTOR_LIST = ["1", "2"];
const TIME_SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM"];
export default function HealthTips() {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateClick = () => {
    const dateInput = document.getElementById("date-input") as HTMLInputElement;
    if (dateInput) {
      dateInput.showPicker();
    }
  };

  const handleDateChange = async (e) => {
    const date = e.target.value;
    setSelectedDate(date);
  };
  return (
    <>
      <div className={classes.centerContainer}>
        <h1>Book an Appointment </h1>
        <div className={classes.formContainer}>
          <div className={classes.leftSection}>
            <div className={classes.formGroup}>
              <label>Select Doctor</label>
              <select className={classes.selectOption}>
                {DOCTOR_LIST.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.formGroup}>
              <label>Select Date </label>
              <input
                type="date"
                onChange={handleDateChange}
                id="date-input"
                className={classes.dateInput}
              />
            </div>
          </div>
          <div className={classes.rightSection}>
            <div className={classes.formGroup}>
              <label>Available Time Slots</label>
              <div className={classes.timeSlots}>
                {TIME_SLOTS.map((time, index) => (
                  <div key={index} className={classes.timeSlot}>
                    {time}
                  </div>
                ))}
              </div>
            </div>

            <div className={classes.formGroup}>
              <label>Reason for Visit </label>
              <textarea></textarea>
            </div>

            <div className={classes.formGroup}>
              <label>Additional Notes (Optional) </label>
              <textarea></textarea>
            </div>
            <button className={classes.confirmButton}>Confirm Booking</button>
          </div>
        </div>
      </div>
    </>
  );
}
