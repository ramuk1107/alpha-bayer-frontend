"use client"

import LeftMenu from "../components/ui-utils/left-menu";
import classes from "./page.module.css";
import React, { useState, useEffect } from 'react';

export default function Dashbaord() {
    const [userData, setUserData] = useState(null);
    const [appointmentData, setAppointmentData] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        try {
            async function fetchPatients() {
                const url = 'http://10.137.203.231:3456/api/v0/user';

                fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`, // Include the token here
                    },
                    // credentials: 'include', // Important: include cookies in request
                    method: 'Get',
                })
                .then((response) => response.json())
                .then((data) => {
                    // Handle server response
                    console.log("===== fetchUsers =====",data);
                    const userData = data['data']
                    setUserData(userData)
                    // console.log("===== fetchUsers =====",setUserData)
                })
                .catch((error) => {
                    console.error(error);
                });
            }
            
            async function fetchAppointments() {
                const url = 'http://10.137.203.231:3456/api/v0/appointment';

                fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`, // Include the token here
                    },
                    // credentials: 'include', // Important: include cookies in request
                    method: 'Get',
                })
                .then((response) => response.json())
                .then((data) => {
                    // Handle server response
                    console.log("===== fetchAppointments =====",data);
                    const appointmentData = data['data']
                    setAppointmentData(appointmentData)
                    // console.log("===== fetchAppointments =====",setUserData)
                })
                .catch((error) => {
                    console.error(error);
                });
            }

            fetchPatients()
            fetchAppointments()
        } catch (error) {
            console.error("handleSubmit exception error:", error);
        }
    }, [])

  return (
    <div className={classes.container}>
      <LeftMenu></LeftMenu>
      <div className={classes.mainContnet}>
        <h1 className={classes.welcomeMsg}>Welcome, Dr. Smith </h1>
      </div>
    </div>
  );
}
