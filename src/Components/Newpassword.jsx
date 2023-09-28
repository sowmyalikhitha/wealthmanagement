import React from 'react';
import wifi from './Images/wifi.jpg';
import image from './Images/bgimage.png';

function Newpassword(){
    return (
        <div className="body">
                <div className="container1">
                    <p>22:00 | 100MB/s</p>
                    <img className="wifi" src={wifi} alt="wifi"></img>
                </div>
                <div>
                <img className="bgimage" src={image} alt="bgimage"></img> 
                </div>
                <h1>New password</h1>
                <form className="formelements">
                    <label>New password</label><br />
                    <input type="text" id="newpassword" name="newpassword" ></input><br/><br/>
                </form>
                <button className="verify_button">Proceed</button>
        </div>
    );
    
}

export default Newpassword;