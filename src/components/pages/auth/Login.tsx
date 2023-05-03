import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="split-screen">
                <div className="left__container">

                    <div className="left">
                        <div className="logo__img">
                            <img src="../../../images/assets/icons/logo.svg" className='logo' alt="" />
                        </div>

                        <div className="banner">
                            <img src="../../../images/assets/img@login.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form className="form" onSubmit={(e) => e.preventDefault()}>

                        <h3 className="form__title fs-40">Welcome!</h3>

                        <p className="form__description fs-20">Enter details to login.</p>

                        <div className="form-group">
                            <input type="email" id='email' placeholder='Email' className='fs-14' />
                        </div>

                        <div className="form-group">
                            <input type="email" id='email' placeholder='Password' className='fs-14' />
                        </div>


                        <Link to='' className='forgot text-success fs-12 d-block fw-600'>FORGOT PASSWORD? </Link>

                        <div className='login__btn '>
                            <Link to='/dashboard/users' className="btn bg-success onwhite w-100">LOG IN</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login