import "../scss/Companies.scss";
import React, { useState } from "react";
import sibdoPic from "../photos/sibdoPic.png";
import Menu from "../js/Menu";
import SibdoO from "../photos/SibdoO.png";
import SibdoS from "../photos/SibdoS.png";
import { useNavigate } from "react-router-dom";

export default function Companies() {
  const [openMP, setOpenMP] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Menu open={openMP} setOpen={setOpenMP} />
      <div id="menulogoComp">
        <img alt="S" onClick={() => setOpenMP(!openMP)} id="S" src={SibdoS} />
        <img alt="O" onClick={() => navigate("/")} id="O" src={SibdoO} />
      </div>
      <div id="toBeContinued">
        <span>
          <img alt="Sibdologo" src={sibdoPic} />
          <p>
            is working on expanding its reach in<br></br> the design and
            engineering field by<br></br> investing in companies who share the
            same <br></br>vision and goals.
          </p>

          <p>This page will be updated soon... </p>
        </span>
      </div>

      <Menu open={openMP} setOpen={setOpenMP} />
      <div id="menulogoComp">
        <img alt="S" onClick={() => setOpenMP(!openMP)} id="S" src={SibdoS} />
        <img alt="O" onClick={() => navigate("/")} id="O" src={SibdoO} />
      </div>
    </>
  );
}
