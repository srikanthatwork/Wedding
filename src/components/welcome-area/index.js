import React from "react";
import "./style.css";
import LocationMap from "../LocationModal/LocationModal";

const Welcome = () => {
  return (
    <div className="welcome-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="welcome-content">
              <h2>Welcome to our big day</h2>
              <p>
                We are overjoyed to share this special moment with you. Your
                presence means the world to us as we celebrate the beginning of
                our forever. Thank you for being part of our journey, our joy,
                and our love.
              </p>
              <div
                className="btn"
                onClick={() => window.open("/files/rsvp.pdf")}
              >
                <a href="/files/Moparthi's_wedding invitation" download>
                  Invitation
                </a>
              </div>
              <LocationMap buttonClass={"location-btn"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
