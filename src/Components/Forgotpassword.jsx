import React from 'react';
import './Forgotpassword.css';
import wifi from './Images/wifi.jpg';
import image from './Images/bgimage.png';
import { useNavigate } from 'react-router-dom';

function Forgotpassword(){
    const navigate = useNavigate();

    function handleVerificationcode(){
        navigate("/verifycode")
    }

    return (
        <div className="body">
        <div className="container1">
            <p>22:00 | 100MB/s</p>
            <img className="wifi" src={wifi} alt="wifi"></img>
        </div>
        <div>
        <img className="bgimage" src={image} alt="bgimage"></img> 
        </div>
        <h1>Forgot password</h1>
        <form className="formelements">
            <label>Email ID</label><br />
            <input type="text" id="email" name="email" ></input><br/><br/>
        </form>
        <div>
        <button className='verificationbutton' onClick={handleVerificationcode}>Send Verification code</button> 
        </div>
        <div className="signup">
                    <a href="/loginpage">Back to login</a>
                </div>
</div>
    );
}

export default Forgotpassword;