import React from "react";
import "../Styles/Main.css";
import Icon from "/home/btengland/rainfocus-ui-brady-england/src/Icon.svg";
import Person from "/home/btengland/rainfocus-ui-brady-england/src/PersonPortal.svg";
import Arrow from "/home/btengland/rainfocus-ui-brady-england/src/Arrow.svg";
import Plus from "/home/btengland/rainfocus-ui-brady-england/src/Plus.svg";
import Computer from "/home/btengland/rainfocus-ui-brady-england/src/Computer.svg";

function ProfileBar() {
  return (
    <div className="main-container">
      <div className="top-of-main-container">
        <div className="top-of-main">
          <img className="main-icon" src={Icon} />
          <div className="top-info">
            <h1>RainFocus Summit</h1>
            <p className="date-big"> December 15th</p>
            <p className="place-big">Lehi, Utah</p>
          </div>
        </div>
        <button>Edit event</button>
      </div>
      <div className="event-setup">
        <h2>Event setup guide</h2>
        <p>
          See the available list of modules below. We suggest that you start
          with the attendee module.
        </p>
      </div>
      <div className="attendee">
        <img src={Person} />
        <h3>Attendee</h3>
      </div>
      <div className="step-one-container">
        <div className="step-title">
          <h5 className="step">Step 1:</h5>
          <p2 className="base">Base settings.</p2>
        </div>
        <div className="step-one-box">
          <div className="general-left">
            <h5 className="set-title">General</h5>
            <p className="set-paragraph">Define Attendee types & attributes</p>
          </div>
          <div className="general">
            <h5 className="set-title">Title</h5>
            <p className="set-paragraph">
              Description that explains the value goes here. Description that
              explains the value goes here
            </p>
          </div>
          <div className="general">
            <h5 className="set-title">Title</h5>
            <p className="set-paragraph">
              Description that explains the value goes here. Description that
              explains the value goes here
            </p>
          </div>
        </div>
      </div>

      <div className="step-two-container">
        <div className="step-title">
          <h5 className="step">Step 2:</h5>
          <p2 className="base">Build registration workflows.</p2>
        </div>
        <div className="step-two-box">
          <div className="base-box">
            <div className="arrow-box">
              <img className="arrow" src={Arrow} />
              <h5 className="set-title">Attendee Registration</h5>
            </div>
            <p className="set-paragraph">
              Start by creating a general registration workflow
            </p>
          </div>
          <div className="base-box">
            <div className="arrow-box">
              <img className="arrow" src={Arrow} />
              <h5 className="set-title">Attendee Registration</h5>
            </div>
            <p className="set-paragraph">
              Start by creating a general registration workflow
            </p>
          </div>
          <div className="base-box">
            <div className="arrow-box">
              <img className="arrow" src={Arrow} />
              <h5 className="set-title">Attendee Registration</h5>
            </div>
            <p className="set-paragraph">
              Start by creating a general registration workflow
            </p>
          </div>
        </div>
      </div>

      <div className="base-box-two-container">
        <div className="base-box-two">
          <div className="plus-container">
            <img className="plus" src={Plus} />
            <p className="set-paragraph">Add Registration Workflow</p>
          </div>
        </div>
      </div>

      <div className="step-three-container">
        <div className="step-title">
          <h5 className="step">Step 3:</h5>
          <p2 className="base">Design post-registration experiences.</p2>
        </div>
        <div className="step-two-box">
          <div className="base-box">
            <div className="arrow-box">
              <img className="arrow" src={Computer} />
              <h5 className="set-title">Attendee Portal</h5>
            </div>
            <p className="set-paragraph">
              Manage the portal that attendees will see after they've registered
              for your event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBar;
