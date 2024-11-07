"use client"

import "./login-styles.css";
import React, { useState } from "react";
import CryptoJS from 'crypto-js';
// import { Snackbar, Alert, Toolbar } from '@mui/material';
import { useRouter } from "next/navigation";

export type FormState = {
    email: string;
    password: string;
  }

export default function login(){
    const logo_path = "logo.svg"
    const [formState, setFormState] = useState<FormState>({
        email: "",
        password: "",
      });
    const [errors, setErrors] = useState<{ [key in keyof FormState]?: string }>({});
    const router = useRouter();

    const validateForm = (): boolean => {
        let valid = true;
        let newErrors: { [key in keyof FormState]?: string } = {};
    
        if (!formState.password) {
          valid = false;
            console.log("====   password 1 == "+valid)
            console.log(formState)
          newErrors.password = "password is required";
        } else if (formState.password.length < 3 || formState.password.length > 30) {
            valid = false;
            console.log("====   password 2 == "+valid)
            newErrors.password = "password must be between 3 and 30 characters";
        }
    
        if (!formState.email) {
          valid = false;
          newErrors.email = "Email is required";
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formState.email)
        ) {
            console.log("====   Email == "+valid)

          valid = false;
          newErrors.email = "Invalid email format";
        }

        setErrors(newErrors);
        console.log("validation == "+valid)
        return valid;
    };
    
    const handleChange = (field: keyof FormState, value: any) => {
        setFormState((prev: any) => ({ ...prev, [field]: value }));
    };

    const handleSubmit  = async(e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            
            const hashedPassword = CryptoJS.SHA256(formState.password).toString(CryptoJS.enc.Base64);
            
            handleChange("password", hashedPassword)
            
            // setFormState((prev) => ({ ...prev, 'password': hashedPassword }));
            const formData = { 'email': formState.email, 'password': hashedPassword }
            const url = 'http://10.137.203.231:3456/api/public/auth/login'

            fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Important: include cookies in request
                method: 'POST',
                body: JSON.stringify(formData),
            })
            .then((response) => response.json())
            .then((data) => {
                // Handle server response
                console.log(data);
                router.push('/dashboard')
                // localStorage.setItem('user_role', data['role']);
            })
            .catch((error) => {
                console.error(error);
            });
            
            setFormState({
                email: "",
                password: "",
            });
        }
    };

    return (
            <>
            {/* <Snackbar
            open={toast.open}
            autoHideDuration={3000}
            onClose={() => setToast({ open: false, message: '' })}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setToast({ open: false, message: '' })} severity="success">
                {toast.message}
                </Alert>
            </Snackbar> */}
        
            <div className="container">
                <div className="login-card">
                    <div className="logo">
                        <img src={logo_path} 
                        width="80" alt="Bayer Healthcare Logo" />
                    </div>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" onChange={(e) => handleChange("email", e.target.value)} required="" />
                        <input type="password" placeholder="Password" onChange={(e) => handleChange("password", e.target.value)} required="" />
                        <button className="btn" type="submit" >Login</button>
                    </form>
                    <div className="links">
                        <a href="javascript:void()">Forgot Password?</a>
                        <br/><br/>
                        <a href="javascript:void()">New User? Register here</a>
                    </div>
                </div>
            </div>
        </>
    )
}