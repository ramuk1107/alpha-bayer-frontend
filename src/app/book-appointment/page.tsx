"use client";
import classes from "./page.module.css";
import { ChangeEvent, useState } from "react";

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

  const handleDateChange = async (e: ChangeEvent<HTMLInputElement>) => {
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
