import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import '../scss/MainPage.scss';
import ArrowHead from '../photos/ArrowHead.png';
import MainLogo from '../photos/MainLogo.png';
import oldFlag from '../photos/oldFlag.png';
import Menu from '../js/Menu';
import currentFlag from '../photos/currentFlag.png';

export default function MainPage() {
    const navigate = useNavigate();
    const [openMP, setOpenMP] = useState(false);

    
    
    return (<>

            <Menu open={openMP} setOpen={setOpenMP}/>
            <div id="main">
            <div id="mainpage">
                <section id="page1">
                    <div id="maintext1">
                        <img id="MainArrow" src={ArrowHead} alt="Arrow Head"/>
                        <p id="menuclick" >Click Here to Access Menu</p>
                        <p id="info">A tourist location in east Darfur<br/>known to host many historical &<br/> cultural events</p>
                    </div>
                    <img id="mainlogo" src={MainLogo} alt="Main Logo" onClick={() => setOpenMP(!openMP)}/>
                </section>

                <section id="page2">
                    <div id="maintext2">
                        <p id="Writtingmain2">MADE IN</p>
                        <p id="Writtingmain2">SUDAN</p>
                        <p id="Writtingmain2">BY <img id="main2images"src={currentFlag} alt="Current Flag"/></p>
                        <p id="Writtingmain2">FOR <img id="main2images" src={oldFlag} alt="Old Flag"/></p>
                    </div>
                </section>

                <section id="page3">
                    <div id="left"></div>
                    <div id="right"></div>
                    <div id="maintext3">
                        <p onClick={()=>navigate("/WhoAreWe")} id="WWA">Who<br/>We<br/>Are</p>
                        <p onClick={()=>navigate("/WhatWeDid")} id="WWD">What<br/>We<br/>Do</p>
                    </div>
                </section>
                
                <footer id="footer">
                    <ul>
                        <li onClick={() => navigate('/contact')}>Contact</li>
                        <li onClick={() => navigate('/WorkWithUs')}>Careers</li>
                        <li>Initiatives</li>
                        <li onClick={() => navigate('/WhatWeDid')}> Work</li>
                    </ul>
                </footer>
            </div>
            </div>
            </> );
}
