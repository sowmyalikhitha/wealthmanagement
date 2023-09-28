import React from 'react';
import wifi from './Images/wifi.jpg';
import image from './Images/bgimage.png';

function Verifycode (){
   
    return (
        <div className="body">
        <div className="container1">
            <p>22:00 | 100MB/s</p>
            <img className="wifi" src={wifi} alt="wifi"></img>
        </div>
        <div>
        <img className="bgimage" src={image} alt="image"></img> 
        </div>
        <h1>Forgot password</h1>
        <form className="formelement">
            <label>Enter code</label><br />
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
            <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"></input>
        </form>
        </div>
    );
}

export default Verifycode;