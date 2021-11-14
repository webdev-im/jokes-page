import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// images
import logo from "../../assets/images/logo.jpg";
// import hamburger from "../../assets/images/hamburger.svg";
// import close from "../../assets/images/close.svg";
import menu from "../../assets/images/menu-2.svg";
import closeTwo from "../../assets/images/close-2.svg";

// style
const StyledHeader = styled.header`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;

  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .nav-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1500px;
    height: 100%;
  }

  .main-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav-logo {
    color: #f5b921;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    flex-grow: 1;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links {
    color: #fdfdfd;
    text-decoration: none;
    height: 100%;
    border-bottom: 3px solid transparent;
    :hover {
      color: #01b8fe;
    }
  }
  .fa-code {
    margin-left: 1rem;
  }

  .nav-item {
    line-height: 40px;
    margin-right: 2rem;
    :hover {
      color: #ac086d;
    }
  }

  .nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.4s ease, background-color 0.4s ease;
  }

  .nav-icon {
    display: none;
    height: 30%;
  }

  .nav-icon img {
    filter: invert(19%) sepia(98%) saturate(4738%) hue-rotate(288deg)
      brightness(85%) contrast(116%);
  }

  .logo img {
    height: 2.5rem;
  }

  // 720 screen
  @media screen and (max-width: 1366px) {
    .logo img {
      height: 2rem;
    }
    .slide {
      h3 {
        font-family: "Parisienne", cursive;
        color: #c49b63;
        font-size: 2rem;
      }
      h1 {
        text-transform: uppercase;
        width: 30%;
        text-align: center;
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
        width: 40%;
        text-align: center;
      }
    }

    .nav-container > .nav-links > img {
      height: 2.3rem;
    }
    .nav-item {
      font-size: 1rem;
    }
  }

  // tablet
  @media screen and (max-width: 812px) {
    .navbar {
      height: 8vh;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: absolute;
      top: 102%;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
      background-color: rgb(1, 2, 17);
      z-index: 6;
    }

    .logo img {
      height: 3rem;
    }

    .nav-menu.active {
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: #ffdd40;
      border: none;
    }
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }

    .nav-item {
      font-size: 1.2rem;
      margin-right: 0;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 5%;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .nav-icon img {
      height: 3rem;
    }

    .nav-container {
      justify-content: flex-start;
    }
    .nav-container > .nav-links > img {
      height: 3.2rem;
    }
    .slide {
      padding: 15% 0;
      h3 {
        font-size: 2rem;
      }
      h1 {
        width: 60%;

        font-size: 2rem;
      }
      p {
        font-size: 1rem;
        width: 70%;
      }
    }
  }

  // mobile
  @media screen and (max-width: 415px) {
    .nav-icon {
      height: 22%;
    }
    .slide {
      padding: 20% 0 15% 0;
      h3 {
        font-size: 2rem;
      }
      h1 {
        width: 70%;

        font-size: 1.7rem;
      }
      p {
        font-size: 1rem;
        width: 80%;
      }
    }
  }
`;

export const Header = () => {
  // hooks
  // state
  const [click, setClick] = useState(false);

  // custom functions
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <StyledHeader className="test">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div className="logo">
            <Link
              to="/"
              activeClassName="active"
              className="nav-links d-flex align-items-center"
              onClick={click ? handleClick : null}
            >
              <img src={logo} alt="" />
            </Link>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/all-jokes"
                href="#about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                All jokes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/post-joke"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Post a joke
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="filter-jokes"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Filter jokes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="single-joke"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Single joke
              </Link>
            </li>
          </ul>
          <div className="nav-icon " onClick={handleClick}>
            {click ? (
              <img src={closeTwo} alt="close mobile menu" />
            ) : (
              <img src={menu} alt="menu hamburger" />
            )}
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
};
