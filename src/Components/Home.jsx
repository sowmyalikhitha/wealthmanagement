import React from 'react';
import './Home.css';
import wifi from './Images/wifi.jpg';
import image from './Images/bgimage.png';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    function handleClick(){
        navigate("/loginpage")
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
                <div>
                <button className='login_button' onClick={handleClick}>Log In</button> 
                </div>
                <div>
                <button className='signup_button'>Sign Up</button> 
                </div>
        </div>
    );
}

export default Home;