import React from "react";
// import { Link } from "react-router-dom";
import strory1 from "../../images/story/PRK030612.JPG";
import strory2 from "../../images/story/JDS05664-600x422.jpg";
import strory3 from "../../images/story/PRK03024-600x422.jpg";
import strory4 from "../../images/story/PRK02932-600x422.jpg";
import "./style.css";

const Story = () => {
  return (
    <div id="story" className="story-area section-padding">
      <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <h2>Our Story</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="story clearfix">
              <div className="story-top"></div>
              <div className="content-wrapper">
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory1} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>First time we met</h2>
                    <span className="date"> 30th March 2025</span>
                    <p>
                      It was the day our story began. A simple moment that
                      turned into something unforgettable. Since then, every
                      chapter has brought us closer, and every day has written a
                      new line in our journey of love.
                    </p>
                    {/* <div className="story-button">
                      <Link className="theme-btn" to="/" title="READ MORE">
                        READ MORE
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory2} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>Our First Date</h2>
                    <span className="date">31st March 2025</span>
                    <p>
                      Our first date was more than just a moment — it was the
                      beginning of everything. Set against the magic of love, we
                      discovered a connection that felt natural, effortless, and
                      meant to be.
                    </p>
                    {/* <div className="story-button">
                      <Link className="theme-btn" to="/" title="READ MORE">
                        READ MORE
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory3} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>Our Marriage Proposal</h2>
                    <span className="date">8th April 2025</span>
                    <p>
                      It was a moment straight out of a dream — heartfelt,
                      sincere, and unforgettable. With a quiet smile and
                      trembling hands, one question changed our lives forever.
                      And with joyful tears and a resounding “yes,” our forever
                      began.
                    </p>
                    {/* <div className="story-button">
                      <Link className="theme-btn" to="/" title="READ MORE">
                        READ MORE
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory4} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>Our Engagement</h2>
                    <span className="date"> 30th April 2025</span>
                    <p>
                      A promise sealed with love and excitement for the future.
                      Our engagement was a celebration of everything we had
                      become — and everything we were about to build together.
                      Surrounded by joy, love, and support, we stepped into the
                      next chapter of our journey.
                    </p>
                    {/* <div className="story-button">
                      <Link className="theme-btn" to="/" title="READ MORE">
                        READ MORE
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="story-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
