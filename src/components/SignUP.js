import React, { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

import { validate } from './validate';
import { toastify } from './toastify';

import styles from './SignUp.module.css';

const SignUP = () => {

    const [data, setDate] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        isaccept: false
    })
    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({});

    useEffect(() => {
        setErrors(validate(data , "signup"))
    }, [data , touch])
    const changeHandler = (e) => {
        if (e.target.name === "isaccept") {
            setDate({ ...data, [e.target.name]: e.target.checked })
        } else {
            setDate({ ...data, [e.target.name]: e.target.value })
        }
    }
    const focusHandler = (e) => {
        setTouch({...touch , [e.target.name]: true})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(!Object.keys(errors).length) {
            toastify("You Signed up successfully" , "success");
        } else {
            toastify("There is an error registering" , "error");
            setTouch({
                name: true,
                email: true,
                password: true,
                confirmpassword: true,
                isaccept: true
            })
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h3 className={styles.header}>SignUP</h3>
                <div className={styles.formContainer}>
                    <label>Name</label>
                    <input
                    className={(errors.name && touch.name) ? styles.error : styles.complete}
                    type="text" 
                    name="name" 
                    value={data.name}
                    placeHolder="Please enter your name"
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    />
                    {errors.name && touch.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.formContainer}>
                    <label>Confirm-Password</label>
                    <input 
                    className={(errors.confirmpassword && touch.confirmpassword) ? styles.error : styles.complete}
                    type="password" 
                    name="confirmpassword" 
                    value={data.confirmpassword}
                    placeHolder="Please repeat your password" 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    />
                    {errors.confirmpassword && touch.confirmpassword && <span>{errors.confirmpassword}</span>}
                </div>
                <div className={styles.formContainer}>
                   <div className={styles.isacceptform}>
                    <label>I accept term of privacy policy</label>
                        <input 
                        type="checkbox" 
                        name="isaccept" 
                        value={data.isaccept} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} 
                        />
                   </div>
                    {errors.isaccept && touch.isaccept && <span>{errors.isaccept}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/login">Login</Link>
                    {/* <a href="#">Login</a> */}
                    <button type="submit">Signup</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    )
}

export default SignUP;
