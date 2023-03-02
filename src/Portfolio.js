import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

//Style
import "./css/style.css";

//images
import avatar from "./avatar.jpg";
import css from "./icons/css.png";
import js from "./icons/js.png";
import html from "./icons/html.png";
import react from "./icons/react.png";
import redux from "./icons/redux.png";
import sass from "./icons/sass.png";
import git from "./icons/git.png";
import vscode from "./icons/vscode.png";
import placeholder from "./placeholder.png";

const Portfolio = () => {
  const [state, setState] = useState({
    value: "",
    status: 0,
  });

  return (
    <div>
      <header className="header">
        <img src={avatar} alt="avatar" />
        <div className="title">
          <h1>Sirus Valioghli</h1>
          <h2 className="position">
            <i className="fa-solid fa-angle-right"></i>Frontend Developer
          </h2>
          <a
            className="button outline icon"
            href="https://github.com/SirusValioghli"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>My Github Profile
          </a>
        </div>
        <a
          className="button outline lang icon small"
          href="github.com/SirusValioghli"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-globe"></i>Fa
        </a>
      </header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <span className="marker">
                <i className="fa-solid fa-angle-right"></i>
              </span>
              <a href="#aboutMe"> About Me </a>
            </li>
            <li>
              <span className="marker">
                <i className="fa-solid fa-angle-right"></i>
              </span>
              <a href="#mySkills"> My Skills </a>
            </li>
            <li>
              <span className="marker">
                <i className="fa-solid fa-angle-right"></i>
              </span>
              <a href="#myProjects"> My Projects </a>
            </li>
          </ul>
        </nav>
        <div className="sections">
          <section id="about-me">
            <h4 id="aboutMe">About Me</h4>
            <p>
              I'm an IT engineering graduated currently living in Meshgin Shar,
              Iran. My main interest is developing front-end of websites and web
              applications. Nowadays, I start using Javascript frameworks such
              as React for client side developing of web apps. I am always eager
              to experience new opportunities and come up with new ideas.
            </p>
            <div className="contact">
              <div>
                <h5>Email</h5>
                <p>
                  SirusValioghli@gmail.com
                  <CopyToClipboard
                    text="SirusValioghli@gmail.com"
                    onCopy={() => setState({ status: 1 })}
                  >
                    <i className="fa-regular fa-clone"></i>
                  </CopyToClipboard>
                  {state.status === 1 ? (
                    <span
                      style={{
                        padding: "5px",
                        color: "silver",
                      }}
                    >
                      (Copied)
                    </span>
                  ) : null}
                </p>
              </div>
              <div>
                <h5>Phone Number</h5>
                <p>
                  09399957446
                  <CopyToClipboard
                    text="09399957446"
                    onCopy={() => setState({ status: 2 })}
                  >
                    <i className="fa-regular fa-clone"></i>
                  </CopyToClipboard>
                  {state.status === 2 ? (
                    <span
                      style={{
                        padding: "5px",
                        color: "silver",
                      }}
                    >
                      (Copied)
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
            <h5>Social Media</h5>
            <ul className="socials">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SirusValioghli"
              >
                <li className="github"></li>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/sirus.valioghli"
              >
                <li className="instagram"></li>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sirusvalioghli"
              >
                <li className="linkedin"></li>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="linkedin.com/in/sirusvalioghli"
              >
                <li className="stackoverflow"></li>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://telegram.me/sirous76"
              >
                <li className="telegram"></li>
              </a>
              <a target="_blank" rel="noreferrer" href="t.me/sirous76">
                <li className="twitter"></li>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://whatsapp.me/+989399957446"
              >
                <li className="whatsapp"></li>
              </a>
            </ul>
          </section>
          <section id="skills">
            <br />
            <h4 id="mySkills">My Skills</h4>
            <h5>Technology</h5>
            <ul className="skills">
              <li>
                <span className="title">
                  <img alt="" src={html} />
                  HTML
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Advanced
                </span>
              </li>
              <li>
                <span className="title">
                  <img alt="" src={css} />
                  CSS3
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Advanced
                </span>
              </li>
              <li>
                <span className="title">
                  <img alt="" src={js} />
                  JavaScript
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Advanced
                </span>
              </li>
              <li>
                <span className="title">
                  <img alt="" src={react} />
                  React
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Advanced
                </span>
              </li>
            </ul>
            <h5 className="mt-64">Tools</h5>
            <ul className="skills">
              <li>
                <span className="title">
                  <img alt="" src={git} />
                  Git
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Intermediate
                </span>
              </li>
              <li>
                <span className="title">
                  <img alt="" src={vscode} />
                  VS Code
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Intermediate
                </span>
              </li>
            </ul>
            <h5 className="mt-64">Other Skills</h5>
            <ul className="other-skills">
              <li>Redux</li>
              <li>Saas</li>
              <li>Responsive Web Design</li>
            </ul>
          </section>
          <br />
          <section id="projects">
            <h4 id="myProjects">My Projects</h4>
            <div className="projects">
              <div className="project">
                <img alt="" src={placeholder} />
                <div className="title">Project Tilte</div>
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="tech">
                  <span> Tech Used:</span>
                  <ul>
                    <li>
                      <img alt="" src={html} />
                    </li>
                    <li>
                      <img alt="" src={css} />
                    </li>
                  </ul>
                </div>
                <div className="buttons">
                  <a className="button ghost" href="google.com">
                    <i className="fa-regular fa-eye"></i>Demo
                  </a>
                  <a href="google.com" className="button outline dark">
                    <i className="fa-brands fa-github"></i>View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <img alt="" src={placeholder} />
                <div className="title">Project Tilte</div>
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="tech">
                  <span> Tech Used:</span>
                  <ul>
                    <li>
                      <img alt="" src={html} />
                    </li>
                    <li>
                      <img alt="" src={css} />
                    </li>
                    <li>
                      <img alt="" src={js} />
                    </li>
                  </ul>
                </div>
                <div className="buttons">
                  <a className="button ghost" href="google.com">
                    <i className="fa-regular fa-eye"></i>Demo
                  </a>
                  <a href="google.com" className="button outline dark">
                    <i className="fa-brands fa-github"></i>View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <img alt="" src={placeholder} />
                <div className="title">Project Tilte</div>
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="tech">
                  <span> Tech Used:</span>
                  <ul>
                    <li>
                      <img alt="" src={html} />
                    </li>
                    <li>
                      <img alt="" src={css} />
                    </li>
                    <li>
                      <img alt="" src={react} />
                    </li>
                  </ul>
                </div>
                <div className="buttons">
                  <a className="button ghost" href="google.com">
                    <i className="fa-regular fa-eye"></i>Demo
                  </a>
                  <a href="google.com" className="button outline dark">
                    <i className="fa-brands fa-github"></i>View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <img alt="" src={placeholder} />
                <div className="title">Project Tilte</div>
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="tech">
                  <span> Tech Used:</span>
                  <ul>
                    <li>
                      <img alt="" src={html} />
                    </li>
                    <li>
                      <img alt="" src={css} />
                    </li>
                    <li>
                      <img alt="" src={react} />
                    </li>
                    <li>
                      <img alt="" src={redux} />
                    </li>
                  </ul>
                </div>
                <div className="buttons">
                  <a className="button ghost" href="google.com">
                    <i className="fa-regular fa-eye"></i>Demo
                  </a>
                  <a href="google.com" className="button outline dark">
                    <i className="fa-brands fa-github"></i>View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <img alt="" src={placeholder} />
                <div className="title">Project Tilte</div>
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="tech">
                  <span> Tech Used:</span>
                  <ul>
                    <li>
                      <img alt="" src={html} />
                    </li>
                    <li>
                      <img alt="" src={css} />
                    </li>
                    <li>
                      <img alt="" src={sass} />
                    </li>
                  </ul>
                </div>
                <div className="buttons">
                  <a className="button ghost" href="google.com">
                    <i className="fa-regular fa-eye"></i>Demo
                  </a>
                  <a href="google.com" className="button outline dark">
                    <i className="fa-brands fa-github"></i>View Code
                  </a>
                </div>
              </div>
              <div className="project">
                <img alt="" src={placeholder} />
                <div className="title">Project Tilte</div>
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="tech">
                  <span> Tech Used:</span>
                  <ul>
                    <li>
                      <img alt="" src={html} />
                    </li>
                    <li>
                      <img alt="" src={css} />
                    </li>
                    <li>
                      <img alt="" src={js} />
                    </li>
                  </ul>
                </div>
                <div className="buttons">
                  <a className="button ghost" href="google.com">
                    <i className="fa-regular fa-eye"></i>Demo
                  </a>
                  <a href="google.com" className="button outline dark">
                    <i className="fa-brands fa-github"></i>View Code
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <nav className="mobile-nav">
        <ul>
          <li className="active">
            <a href="#aboutMe">
              <i className="fa-regular fa-user"></i>
              About
            </a>
          </li>
          <li>
            <a href="#mySkills">
              <i className="fa-solid fa-code"></i>
              Skills
            </a>
          </li>
          <li>
            <a href="#myProjects">
              <i className="fa-solid fa-laptop-code"></i>
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Portfolio;
