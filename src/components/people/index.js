import React, { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
// import classnames from "classnames";
import { Link } from "react-router-dom";
import Sectiontitle from "../section-title";
import bride1 from "../../images/groomsmen-bridesmaid/BROTHER.JPG";
import bride2 from "../../images/family/bridemom3.JPG";
import bride3 from "../../images/family/bridedad.JPG";

import "./style.css";

const People = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  // eslint-disable-next-line no-unused-vars
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div id="people" className="person-area section-padding pb-70">
      <div className="container">
        <Sectiontitle section={"Invited By"} />
        <div className="person-area-menu">
          <div className="person-btn">
            {/* <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Groomsman
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Bridemaids
                  </NavLink>
                </NavItem>
              </Nav> */}
          </div>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="Groomsman-wrap">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="person-wrap">
                      <div className="person-img">
                        <img src={bride3} alt="" />
                        {/* <div className="social-list">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="fa fa-facebook-f"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-skype"></i>
                              </Link>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                      <div className="person-content">
                        <h3>Mr.Chandra Sekhar</h3>
                        <span>Father</span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="person-wrap">
                        <div className="person-img">
                          <img src={bride2} alt="" />
                          <div className="social-list">
                            <ul>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-facebook-f"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="fa fa-skype"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="person-content">
                          <h3> Mr Chandra Shekhar</h3>
                          <span>Father</span>
                        </div>
                      </div>
                    </div> */}
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="person-wrap">
                      <div className="person-img">
                        <img src={bride1} alt="" />
                      </div>
                      <div className="person-content">
                        <h3>Mr.Bhargav</h3>
                        <span> Brother</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="person-wrap">
                      <div className="person-img">
                        <img src={bride2} alt="" />
                        <div className="social-list">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="fa fa-facebook-f"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-skype"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="person-content">
                        <h3> Mrs.Srilakshmi</h3>
                        <span>Mother</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="Ceremony-wrap">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="person-wrap">
                      <div className="person-img">
                        <img src={bride3} alt="" />
                        <div className="social-list">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="fa fa-facebook-f"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-skype"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="person-content">
                        <h3>Mr Abraham</h3>
                        <span>Best Friend</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default People;
