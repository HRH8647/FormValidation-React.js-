import React, { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

import { validate } from './validate';
import { toastify } from './toastify';

import styles from './Login.module.css';

const Login = () => {

    const [data, setDate] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({});

    useEffect(() => {
        setErrors(validate(data))
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
            toastify("You Logged up successfully" , "success");
        } else {
            toastify("Invalid Data" , "error");
            setTouch({
                email: true,
                password: true
            })
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h3 className={styles.header}>Login</h3>
                
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
                <div className={styles.formContainer}>
                    <label>Password</label>
                    <input
                    className={(errors.password && touch.password) ? styles.error : styles.complete} 
                    type="password" 
                    name="password" 
                    value={data.password}
                    placeHolder="Please set password" 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    />
                    {errors.password && touch.password && <span>{errors.password}</span>}
                </div>
                
                <div className={styles.formButtons}>
                    <Link to="/signup">Signup</Link>
                    {/* <a href="#">Signup</a> */}
                    <button type="submit">Login</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    )
}

export default Login;
