import React, { ReactNode } from "react";
import classes from "./patient-appointment-card.module.css";

const DATA = [
  "Next appointment: Dr. Smith on June 15, 2023 at 10:00 AM",
  "Following: Dr. Johnson on June 22, 2023 at 2:00 PM",
];
const PatientAppointmentCard = () => {
  return (
    <>
      <div className={classes.card}>
        <h2 className={classes.healthTopicTilte}>Upcoming Appointments </h2>
        {DATA.map((text, index) => (
          <p className={classes.appointment}>text</p>
        ))}
      </div>
    </>
  );
};

export default PatientAppointmentCard;
