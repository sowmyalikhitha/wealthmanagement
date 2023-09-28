import React, { Component } from 'react';
import './Loginpage.css';
import wifi from './Images/wifi.jpg';
import image from './Images/bgimage.png';

class Loginpage extends Component {
    render() {
        return (
            <div className="body">
                <div className="container1">
                    <p>22:00 | 100MB/s</p>
                    <img className="wifi" src={wifi} alt="wifi"></img>
                </div>
                <div>
                <img className="bimage" src={image} alt="bimage"></img> 
                </div>
                <div className="container">
                    <h2>Log-in</h2>
                <div>
                <form className="formelements">
                    <label>Email ID</label><br />
                    <input type="text" id="email" name="email" ></input><br/><br/>
                    <label>Password</label><br />
                    <input type="text" id="password" name="password" ></input>
                </form><br/>
                </div>
                <div className="forgetpassword">
                    <a href="/forgotpassword">Forgot password?</a>
                </div>
                <button className='log_button'>Login</button> 
                <div className="signup">
                    <a href="/signup">Don't have an account? Sign-up</a>
                </div>
                </div>
            </div>
        );
    }
}

export default Loginpage;