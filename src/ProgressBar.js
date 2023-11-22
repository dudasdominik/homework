import React, { useEffect, useState } from 'react'
import './progress.css'
import logo from './resources/verified.svg'

function ProgressBar({ isVisible, setVisibility, isRunning, username }) {
    const [filled, setFilled] = useState(0);
  
    useEffect(() => {
      let timer;
  
      if (isRunning) {
        timer = setInterval(() => {
          if (filled < 100) {
            setFilled((prev) => prev + 2);
          }
        }, 75);
      }
  
      const timeoutId = setTimeout(() => {
        clearInterval(timer);
      }, 5000);
  
      return () => {
        clearInterval(timer);
        clearTimeout(timeoutId);
      };
    }, [filled, isRunning]);
  
    return isVisible ? (
      <div className="popup-container">
        <div className="popup-details">
          <img className="verified-image" src={logo} alt="Verified" />
          <div className="text-container">
            <h3>Greetings, </h3>
            <h3 className="username-field">
              {username === "" ? "user" : username}
            </h3>
            <h3>welcome!</h3>
          </div>
          <a
            onClick={(e) => {
              e.preventDefault();
              setVisibility(false);
            }}
            className="close-btn"
          >
            X
          </a>
        </div>
        <div className="progressbar">
          <div
            style={{
              height: "5px",
              borderRadius: "25px",
              width: `${filled}%`,
              background: `linear-gradient(to right, #B98418 0%, #BFAD70 33%, #B98418 66%, #B98418 100%)`,
              transition: "width 0.5s",
            }}
          ></div>
        </div>
      </div>
    ) : null;
  }
export default ProgressBar
