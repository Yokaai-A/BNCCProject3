import React, { useEffect, useState } from "react";
import "../styles/About.css";

const About = () => {
  const [decorations, setDecorations] = useState([]);

  useEffect(() => {
    const newDecorations = Array.from({ length: 30 }).map(() => ({
      id: Math.random(),
      type: Math.random() > 0.5 ? "balloon" : "line",
      top: "100%",
      left: Math.random() * 90 + "%",
      size: Math.random() * 50 + 20 + "px", 
      animationDuration: Math.random() * 7 + 5 + "s",
      animationDelay: Math.random() * 3 + "s", 
    }));
    setDecorations(newDecorations);
  }, []);
  
  return (
    <div className="about-page">
      {decorations.map((decor) => (
        <div
          key={decor.id}
          className={decor.type === "balloon" ? "animated-balloon" : "animated-line"}
          style={{
            top: decor.top,
            left: decor.left,
            width: decor.size,
            height: decor.size,
            animationDuration: decor.animationDuration,
            animationDelay: decor.animationDelay,
          }}
        />
      ))}

      <div className="content-container">
        <div className="about-content-box">
          <h1>About WorldUniversity</h1>
          <p>     
            WorldUniversity is a global education platform that provides access to information about universities around the world. We help prospective students find the best universities that suit their interests and needs.
          </p>
        </div>
        <div className="connector"><div className="rope"></div></div>
      </div>

      <div className="content-container">
        <div className="vision-box">
          <h2>Vision</h2>
          <p>To establish accessible and affordable educational opportunities for everyone around the globe.</p>
        </div>
        <div className="connector"><div className="rope"></div></div>
      </div>

      <div className="content-container">
        <div className="mission-box">
          <h2>Mission</h2>
          <ul>
            <li>Assist in searching for universities based on location and area of study.</li>
            <li>Offer precise and current information about universities worldwide.</li>
            <li>Link prospective students with leading educational institutions.</li>
          </ul>
        </div>
        <div className="connector"><div className="rope"></div></div>
      </div>

      <div className="content-container">
        <div className="about-content-box">
          <h2>Development Team</h2>
          <p>
            We are a group of developers, designers, and educators committed to improving access to education. By leveraging modern technology, we aim to develop innovative solutions that streamline your learning experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
