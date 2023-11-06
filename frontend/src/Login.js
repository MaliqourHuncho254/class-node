import React, { useState } from 'react'; // Import useState
import { Link, useNavigate } from 'react-router-dom';
import './LoginValidation';
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({ // Corrected useState
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({}); // Corrected useState

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value }); // Corrected spreading of values
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "success") {
                        navigate('/home')
                    } else {
                        alert("No record existed");
                    }
                })
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action='' onSubmit={handleSubmit}>
                    <h2>Sign-In</h2>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            name='email'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Log in
                    </button>
                    <p>You agree to our terms and policies</p>
                    <Link
                        to='/signup'
                        className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
                    >
                        Create Account
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login; // Moved to the top

