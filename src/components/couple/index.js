import React from "react";
// import { Link } from "react-router-dom";
import Sectiontitle from "../section-title";
import couple1 from "../../images/couple/bride.JPG";
import couple2 from "../../images/couple/JDS05648.JPG";
import couple3 from "../../images/couple/2.png";
import "./style.css";

const Couple = () => {
  return (
    <div id="couple" className="about-wrap">
      <div className="couple-area section-padding pb-70">
        <Sectiontitle section={"Happy Cuple"} />
        <div className="container">
          <div className="couple-wrap">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-2">
                  <div className="couple-img">
                    <img src={couple1} alt="thumb" />
                  </div>
                  <div className="couple-text">
                    <div className="couple-content">
                      <h3>NAGA SRAVYA</h3>
                      <p>
                        Hello! My name is Naga Sravya. I am a Certified Medical
                        Coder and a Bachelor of Pharmacy (BPharm) graduate,
                        combining expertise in healthcare documentation and
                        pharmaceutical sciences.
                      </p>
                    </div>
                    {/* <div className="social-icon">
                        <ul className="d-flex">
                          <li>
                            <Link to="/">
                              <span className="fa fa-facebook"></span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <span className="fa fa-twitter"></span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <span className="fa fa-google-plus"></span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <span className="fa fa-linkedin"></span>
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 couple-single">
                <div className="couple-shape">
                  <img src={couple3} alt="shape" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-3">
                  <div className="couple-img couple-img-2">
                    <img src={couple2} alt="thumb" />
                  </div>
                  <div className="couple-text">
                    <div className="couple-content">
                      <h3>ANANTHA SAI RAM</h3>
                      <p>
                        Hello! My name is Anantha Sai Ram. I am a dedicated
                        Banking Professional at Andhra Pradesh Grameena Bank,
                        with a strong academic foundation in technology, holding
                        a Bachelor of Technology (BTech) degree.
                      </p>
                    </div>
                    {/* <div className="social-icon">
                        <ul className="d-flex">
                          <li>
                            <Link to="/">
                              <span className="fa fa-facebook"></span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <span className="fa fa-twitter"></span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <span className="fa fa-google-plus"></span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <span className="fa fa-linkedin"></span>
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
