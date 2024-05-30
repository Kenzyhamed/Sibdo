import "../scss/Menu.scss";
import fullArrow from "../photos/fullArrow.png";
import MenuPic from "../photos/MenuPic.png";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Menu({ open, setOpen }) {
  const navigate = useNavigate();

  useEffect(() => {
    const menuElement = document.getElementById("Menu");
    if (open) {
      menuElement.style.display = "block";
    } else {
      menuElement.style.display = "none";
    }
  }, [open]);

  function closeNav() {
    const menuElement = document.getElementById("Menu");
    if (menuElement) {
      menuElement.style.display = "none";
      setOpen(false);
    }
  }

  return (
    <div id="Menu">
      <div id="organize">
        <p id="close" onClick={closeNav}>
          X
        </p>
        <div id="MenuPic"  />
        <div id="Contents">
          <div id="MenuContents1">
            <p onClick={() => navigate("/WhoAreWe")}>Who Are We</p>
            <p onClick={() => navigate("/WhatWeDid")}>What We Do </p>
            <p onClick={() => navigate("/Companies")}>Companies</p>
          </div>
          <div id="MenuContents2">
            <p onClick={() => navigate("/WhatWereDoing")}>What We're Doing</p>
            <p onClick={() => navigate("/WorkWithUs")}>Work With Us </p>
            <p onClick={() => navigate("/Contact")}>Talk To Us</p>
          </div>
        </div>

        <img id="fullArrow" alt="fullArrow" src={fullArrow} />
        <div id="alt">
          <p>Adam Musa Madibo;</p>
          <p>
            Former & Youngest Sudanese Minister of Defense<br></br>PhD. Civil
            Eng.
            <br></br>SIBDO Engineering Consultancy Founder
          </p>
        </div>
      </div>
    </div>
  );
}
