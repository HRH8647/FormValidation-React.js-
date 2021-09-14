import React, { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

import { validate } from './validate';
import { toastify } from './toastify';

import styles from './Login.module.css';

const ForgotPassword = () => {
    document.title = "ForgotPassword";
    const [data, setDate] = useState({
        email: "",
    })
    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({});

    useEffect(() => {
        setErrors(validate(data , "forgot"));
    }, [data , touch])
    const changeHandler = (e) => {
        setDate({ ...data, [e.target.name]: e.target.value })
    }
    const focusHandler = (e) => {
        setTouch({...touch , [e.target.name]: true})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(!Object.keys(errors).length) {
            toastify("Check your email to reset your password" , "success");
        } else {
            toastify("Please enter your email" , "error");
            setTouch({
                email: true,
            })
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h3 className={styles.header}>Reset Password</h3>
                
                <div className={styles.formContainer}>
                    <label>Email</label>
                    <input 
                    className={(errors.email && touch.email) ? styles.error : styles.complete}
                    type="email" 
                    name="email" 
                    value={data.email}
                    placeHolder="Please enter your email" 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    />
                    {errors.email && touch.email && <span>{errors.email}</span>}
                </div>
            
                <div className={styles.formButtons}>
                    <Link to="/login">Login</Link>
                    <button type="submit">Reset</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    )
}

export default ForgotPassword;
