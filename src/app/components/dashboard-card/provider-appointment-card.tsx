import React, { ReactNode } from "react";
import classes from "./provider-appointment.module.css";

const DATA = [
  { time: "9 AM", patient_name: "Sathish", reason: "Annual Check-up" },
];
const ProviderAppointmentCard = () => {
  return (
    <>
      <div className={classes.card}>
        <h2 className={classes.healthTopicTilte}>Today's Appointments </h2>
        <div className={classes.tableContainer}>
          <table className={classes.appointmentTable}>
            <thead>
              <tr>
                <th>Time</th>
                <th>Patient Name</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody className={classes.appointmentBody}>
              {DATA.map((appointment, index) => (
                <tr key={index} className={classes.appointmentRow}>
                  <td>{appointment.time}</td>
                  <td>{appointment.patient_name}</td>
                  <td>{appointment.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProviderAppointmentCard;
