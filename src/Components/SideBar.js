import React from "react";
import "../Styles/SideBar.css";

function ProfileBar() {
  return (
    <div className="side-container">
      <h4 className="side-summit">RainFocus Summit</h4>
      <p className="date">Lehi, UT • December 15th</p>
      <div className="search-container">
        <div className="magGlass"></div>
        <div className="search-word">Search</div>
      </div>
      <div className="bubble-container">
        <div className="circle-summit"></div>
        <h4 className="space-word">Guide</h4>
      </div>
      <div className="selected-container">
        <div className="bubble-container-selected">
          <div className="circle-summit-selected"></div>
          <h4 className="space-word">Attendees</h4>
        </div>
        <div className="selected-options">
          <h5 className="inside-word">Attendees</h5>
          <h5 className="inside-word">Attendee types</h5>
          <h5 className="inside-word">Packages</h5>
          <h5 className="inside-word">Reg codes</h5>
          <h5 className="inside-word">Discounts</h5>
        </div>
      </div>
      <div className="bubble-container">
        <div className="circle-summit"></div>
        <h4 className="space-word">Content</h4>
      </div>
      <div className="bubble-container">
        <div className="circle-summit"></div>
        <h4 className="space-word">Exhibitors</h4>
      </div>
    </div>
  );
}

export default ProfileBar;
