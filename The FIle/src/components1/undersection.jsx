import china from "../Assets/China.jpeg"; 
import russia from "../Assets/Russia.jpeg"; 
import america from "../Assets/America.jpeg"; 
import france from "../Assets/France.jpeg"; 
import inggris from "../Assets/Inggris.jpeg"; 
import React from "react";

const UnderSection = () => {
  return (
      <div className="under-section">
          <h2 className="section-title">Most Famous Country</h2>
          <div className="flags-container">
              <div className="flag-box">
                  <img src={china} alt="China" className="flag-image" />
                  <p>China</p>
              </div>
              <div className="flag-box">
                  <img src={russia} alt="Russia" className="flag-image" />
                  <p>Russia</p>
              </div>
              <div className="flag-box">
                  <img src={america} alt="America" className="flag-image" />
                  <p>America</p>
              </div>
              <div className="flag-box">
                  <img src={france} alt="France" className="flag-image" />
                  <p>France</p>
              </div>
              <div className="flag-box">
                  <img src={inggris} alt="UK" className="flag-image" />
                  <p>United Kingdom</p>
              </div>
          </div>
      </div>
  );
};

export default UnderSection;