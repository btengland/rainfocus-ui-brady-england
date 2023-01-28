import React from "react";
import "../Styles/ProfileBar.css";
import Logo from "/home/btengland/rainfocus-ui-brady-england/src/Logo.svg";
import Icon from "/home/btengland/rainfocus-ui-brady-england/src/Icon.svg";

function ProfileBar() {
  return (
    <div className="profile-container">
      <div className="picture-box">
        <img className="logo" src={Logo} />
        <img className="icon" src={Icon} />
      </div>
      <div className="user">FL</div>
    </div>
  );
}

export default ProfileBar;
