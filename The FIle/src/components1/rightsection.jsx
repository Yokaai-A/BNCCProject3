import { Link } from "react-router-dom";
import React from "react";

const RightSection = () => {
    return (
      <div className="right-box">
        <div className="right-up-section">
          <h2 className="upper section2">Features</h2>
          <Link to="/search" className="feature-box1">Country Search</Link>
          <Link to="/detail" className="feature-box2">Country Detail</Link>
          <Link to="/filter" className="feature-box3">Country Filter</Link>
        </div>
        <div className="right-down-section">
          <h2 className="upper section2">About</h2>
          <Link to="/about" className="about-box">&lt;&lt;&lt; Go To About Page &gt;&gt;&gt;</Link>
        </div>
      </div>
    );
};

export default RightSection;
