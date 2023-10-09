import React from 'react';
import wifi from './Images/wifi.jpg';
import image from './Images/bgimage.png';
import './Signup.css';

function Signup(){
    
        return (
        <div className="body">
            <div className="container1">
                <p>22:00 | 100MB/s</p>
                <img className="wifi" src={wifi} alt="wifi"></img>
            </div>
            <div>
                <img className="bgimage" src={image} alt="bgimage"></img> 
            </div>
           <div className="progressbar">
                <div className="progress-step step1"></div>
                <div className="progress-step step2"></div>
                <div className="progress-step step3"></div>
           </div>
            <h1 className="h1">Welcome to FinGrow,</h1>
            <h4>Let's get to know each other!</h4>
            <form className="formelements">
                <label>What's your name?</label><br />
                <input type="text" id="name" name="name" ></input><br/><br/>
            </form>
            <button className="getstarted">Get Started</button>
        </div>
    );
}

export default Signup;