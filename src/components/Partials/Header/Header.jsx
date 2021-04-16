import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <div>
      <div className="header-big-container">
        <div className="header-container">
          <div className="left-container">
            <div className="mahindarama-logo-container">
              <div className="mahindarama-logo" />
            </div>
            <div className="option">Home</div>
            <div className="option">Dhamma</div>
            <div className="option">Events</div>
            <div className="option">Location</div>
            <div className="option">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
