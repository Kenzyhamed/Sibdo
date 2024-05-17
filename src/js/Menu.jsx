import "../scss/Menu.scss";
import ArrowHead from "../photos/ArrowHead.png";
import ArrowTail from "../photos/ArrowTail.png";
import MenuPic from "../photos/MenuPic.png";
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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
      <p id="close" onClick={closeNav}>
        X
      </p>
      <img id="MenuPic"  alt ="menupic" src={MenuPic} />
      <div id="Contents">
        <div id="MenuContents1">
          <p onClick={()=>navigate("/WhoAreWe")}>Who Are We</p>
          <p onClick={()=>navigate("/WhatWeDid")}>What We Do </p>
          <p onClick={()=>navigate("/Companies")}>Companies</p>
        </div>
        <div id="MenuContents2">
          <p onClick={()=>navigate("/WhatWeDid")}>Initiatives</p>
          <p onClick={()=>navigate("/WorkWithUs")}>Work With Us </p>
          <p onClick={()=>navigate("/Contact")}>Talk To Us</p>
        </div>
      </div>
      <img id="ArrowHead"  alt="arrowhead"src={ArrowHead} />
      <img id="ArrowTail" alt="arrowtail" src={ArrowTail} />
      <div id="alt">
        <p>Adam Musa Madibo;</p>
        <p>
          Former & Youngest Sudanese Minister of Defense<br></br>PhD. Civil Eng.
          <br></br>SIBDO Engineering Consultancy Founder
        </p>
      </div>
    </div>
  );
}
