import React from 'react';
import wifi from './Images/wifi.jpg';
import image from './Images/bgimage.png';
import './Verifycode.css';
import { useNavigate } from 'react-router-dom';

function Verifycode (){
   
    const navigate = useNavigate();

    function handleVerifyProceed(){
        navigate("/verifyproceed")
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
        <div className="formelement">
        <form >
            <label>Enter code</label><br />
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
        </form>
        </div>
        <button className='verify_button' onClick={handleVerifyProceed}>Proceed</button> 
        </div>
    );
}

export default Verifycode;