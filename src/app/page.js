'use client';
import React from 'react';
import '../style/page.css';

export default function Home() {
    const btnPopup = () => {
        const wrapper = document.querySelector('.wrapper');
        if (wrapper) {
        wrapper.classList.add('active-popup');
        }
    };

    const iconClose = () => {
        const wrapper = document.querySelector('.icon-close');
        if (wrapper) {
        wrapper.classList.remove('active-popup');
        }
    };

    const addActiveClass = () => {
        const wrapper = document.querySelector('.wrapper');
        if (wrapper) {
        wrapper.classList.add('active');
        }
    };

    const removeActiveClass = () => {
        const wrapper = document.querySelector('.wrapper');
        if (wrapper) {
        wrapper.classList.remove('active');
        }
    };
  return (
    <main className="body">
        <div className="container">
            <header>
                <h2 className="logo">Scorpio</h2>
                <nav className="navigation">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <button className="btnLogin-popup" onClick={btnPopup}>Login</button>
                </nav>
            </header>

            <div className="wrapper">
                <span className="icon-close" onClick={iconClose}>
                    <ion-icon name="close" ></ion-icon>
                </span>
                {/* Login */}
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span class="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="text" className="" required />
                            <label htmlFor="">Username</label>
                        </div>
                        <div className="input-box">
                            <span class="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" className="" required/>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label htmlFor=""><input type="checkbox" />Remember me</label>
                            <a href="#" className="">Forgot Password? </a>
                        </div>
                        <button type='submit' class="btn">Login</button>
                        <div className="login-register">
                            <p>Don't have an account?&nbsp;&nbsp;<a href="#" class="register-link" onClick={addActiveClass}>Register</a></p>
                        </div>
                    </form>
                </div>
                {/* Register */}
                <div className="form-box register">
                    <h2>Registration</h2>
                    <form action="#">
                        <div className="input-box">
                            <span class="icon">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <input type="email" className="" required />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="input-box">
                            <span class="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="text" className="" required/>
                            <label htmlFor="">Username</label>
                        </div>
                        <div className="input-box">
                            <input type="text" className="" required/>
                            <label htmlFor="">First name</label>
                        </div>
                        <div className="input-box">
                                <input type="text" className="" required/>
                                <label htmlFor="">Middle name</label>
                        </div>
                        <div className="input-box">
                            <input type="text" className="" required/>
                            <label htmlFor="">Last name</label>
                        </div>
                        <div className="input-box">
                            <span class="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" className="" required/>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="input-box">
                            <span class="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" className="" required/>
                            <label htmlFor="">Re-enter password</label>
                        </div>
                        <div className="remember-forgot">
                            <label htmlFor=""><input type="checkbox" />I agree to the terms and conditions.</label>
                        </div>
                        <button type='submit' class="btn">Register</button>
                        <div className="login-register">
                            <p>Already have an account? &nbsp;&nbsp;<a href="#" class="login-link" onClick={removeActiveClass}>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
  )
}
