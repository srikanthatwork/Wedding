import React, { Component } from "react";
import "./style.css";
// import sampleVideo from "../../images/family/NagaSravyavideo.mp4"; 

class Rsvp extends Component {
  render() {
    return (
      <div id="rsvp" className="rsvp-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 style={{ textAlign: "center", marginBottom: "20px" , color: "#fff", fontSize: "2.5rem", height: "700px", paddingTop: "40px"}}>
                We Invites You to Join Us
              </h2>
              {/* <div className="video-wrapper">
                <video
                  className="responsive-video"
                  autoPlay
                  muted
                  playsInline
                  loop
                  controls
                >
                  <source src={sampleVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rsvp;
