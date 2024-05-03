import React, { useEffect, useState } from "react";
import '../scss/MainPage.scss';
import ArrowHead from '../photos/ArrowHead.png';
import MainLogo from '../photos/MainLogo.png';
import oldFlag from '../photos/oldFlag.png';
import Right from '../photos/Right.png';
import Left from '../photos/Left.png';
import Menu from '../js/Menu';
import currentFlag from '../photos/currentFlag.png';

export default function MainPage() {
    const [openMP, setOpenMP] = useState(false);

    function openNav() {
        setOpenMP(true)
    }
    
    
    return (<>

            <Menu open={openMP} setOpen={setOpenMP}/>
            <div id="main">
            <div id="mainpage">
                <section id="page1">
                    <div id="maintext1">
                        <img id="Arrow" src={ArrowHead} alt="Arrow Head"/>
                        <p id="menuclick" onClick={() => setOpenMP(!openMP)}>Click Here to Access Menu</p>
                        <p id="info">A tourist location in east Darfur<br/>known to host many historical &<br/> cultural events</p>
                    </div>
                    <img id="mainlogo" src={MainLogo} alt="Main Logo" onClick={openNav}/>
                </section>

                <section id="page2">
                    <div id="maintext2">
                        <p>MADE IN</p>
                        <p>SUDAN</p>
                        <p>BY <img src={currentFlag} alt="Current Flag"/></p>
                        <p>FOR <img src={oldFlag} alt="Old Flag"/></p>
                    </div>
                </section>

                <section id="page3">
                    <img id="left" src={Left} alt="Left Arrow"/>
                    <img id="right" src={Right} alt="Right Arrow"/>
                    <div id="maintext3">
                        <p id="WWA">Who<br/>We<br/>Are</p>
                        <p id="WWD">What<br/>We<br/>Do</p>
                    </div>
                </section>
                
                <footer id="footer">
                    <ul>
                        <li>Contact</li>
                        <li>Careers</li>
                        <li>Initiatives</li>
                        <li>Work</li>
                    </ul>
                </footer>
            </div>
            </div>
            </> );
}
