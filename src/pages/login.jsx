import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if (
            formData.email === '' ||
            formData.password === ''
        ) {

            toast.error('Please fill all fields')

        }
        else if (formData.password.length < 6) {

            toast.error('Password must be at least 6 characters')

        }
        else {

            toast.success('Login Successfully')

        }

    }

    return (
        <>

            <ToastContainer />

            <div className="container">

                <div className="row justify-content-center mt-5">

                    <div className="col-lg-5 col-md-7 col-sm-10">

                        <div className="card shadow p-4">

                            <h2 className="text-center mb-4">
                                Login Form
                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3 text-center">

                                    <Link
                                        to="/forget-password"
                                        className="text-decoration-none"
                                    >
                                        Forgot Password?
                                    </Link>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Login
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Login