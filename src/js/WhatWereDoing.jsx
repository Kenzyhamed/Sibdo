import '../scss/WhatWereDoing.scss';
import sibdoPic from '../photos/sibdoPic.png';
import React, { useState } from "react";
import Menu from '../js/Menu';
import SibdoO from '../photos/SibdoO.png'
import SibdoS from '../photos/SibdoS.png'
import { useNavigate } from 'react-router-dom';

export default function WhatWereDoing() {
    const [openMP, setOpenMP] = useState(false);

    const navigate = useNavigate();
    return(<>
        <Menu open={openMP} setOpen={setOpenMP}/>
        <div id="menulogoWWD">
            <img alt ="S" onClick={() => setOpenMP(!openMP)} id= "S" src={SibdoS}/>
            <img alt ="O" onClick={()=>navigate("/")} id= "O" src={SibdoO}/>
        </div>
        <div id="text">
            <span>
            <img  id="imageSibdo" alt ="Sibdo" src={sibdoPic}/>
            <p>has begun working on projects within and outside of Sudan, that are<br></br> meaningful and impactful to the country and its people.</p>
            <p><br></br>This page will be updated every step of the way; come back soon...</p>
            </span>
        </div>

    </>);
  }