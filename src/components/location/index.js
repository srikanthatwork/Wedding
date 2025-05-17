import React from "react";
import Sectiontitle from "../section-title";
import strory1 from "../../images/events/s-convention.avif";
import strory2 from "../../images/events/wedding2.JPG";
import strory3 from "../../images/events/AS-convention.jpg";
import LocationMap from "../LocationModal/LocationModal";

import "./style.css";

const Location = () => {
  return (
    <div id="event" className="service-area section-padding">
      <div className="container">
        <Sectiontitle section={"When & Where"} />
        <div className="service-area-menu">
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="ceromony-img">
                  <img src={strory1} alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ceromony-content">
                  <h3>Wedding Ceremony</h3>
                  <span> Friday 23th May 2025 09:27 PM</span>
                  <span>S Convention Hall Pedakakani,Guntur</span>
                  <p>
                    Join us as we celebrate the sacred union of two hearts in a
                    traditional wedding ceremony filled with love, culture, and
                    joy. Surrounded by family and friends, we will honor rituals
                    that mark the beginning of a lifelong journey together. The
                    day will include heartfelt vows, blessings, music, and
                    cherished moments. We look forward to sharing this special
                    day with you.{" "}
                  </p>
                  <LocationMap buttonClass={"location-btn"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Ceremony-wrap">
          <div className="row">
            <div className="col-lg-7">
              <div className="ceromony-content ceromony-content2">
                <h3>Wedding Party</h3>
                <span> Friday 23th May 2025 09:27 PM</span>
                <span>S Convention Hall Pedakakani,Guntur</span>
                <p>
                  Let’s celebrate love, laughter, and the beginning of a
                  beautiful journey! Join us for an unforgettable evening of
                  joy, music, dance, and delicious cuisine as we toast to the
                  happy couple. Dress in your best and bring your dancing
                  shoes—it’s time to party in style! Your presence will make our
                  celebration even more special.
                </p>
                <LocationMap buttonClass={"location-btn"} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ceromony-img">
                <img src={strory2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="Ceremony-wrap">
          <div className="row">
            <div className="col-lg-5">
              <div className="ceromony-img">
                <img src={strory3} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ceromony-content">
                <h3>Reception Party</h3>
                <span> Saturday 24th May 2025 Afternoon</span>
                <span>AS Convention Hall ,Vijayawada</span>
                <p>
                  The wedding bells have rung, and now it’s time to celebrate
                  the newlyweds in style! Join us for an evening of elegance,
                  joy, and heartfelt moments as we host a grand reception to
                  honor their union. Enjoy a gourmet dinner, delightful
                  conversations, and a night full of dancing and celebration.
                  Your warm wishes and presence will light up the evening!
                </p>
                <LocationMap buttonClass={"location-btn"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Location;
