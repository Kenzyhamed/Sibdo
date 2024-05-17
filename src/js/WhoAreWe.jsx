import '../scss/WhoAreWe.scss';
import SibdoO from '../photos/SibdoO.png'
import SibdoS from '../photos/SibdoS.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../js/Menu';

export default function WhoAreWe() {
    const [name, setName] = useState(false);
    const [company, setCompany] = useState(false);
    const [vision, setVision] = useState(false);
    const [mission, setMission] = useState(false);
    const [openMP, setOpenMP] = useState(false);
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        if(option === 'name'){
            setName(true);
            setCompany(false);
            setVision(false);
            setMission(false); 
        }
        else if(option === 'company'){
            setName(false);
            setCompany(true);
            setVision(false);
            setMission(false); 
        }
        else if(option === 'vision'){
            setName(false);
            setCompany(false);
            setVision(true);
            setMission(false); 
        }
        else if(option === 'mission'){
            setName(false);
            setCompany(false);
            setVision(false);
            setMission(true); 
        }

    };



    return (
        <div id="background">
        <Menu open={openMP} setOpen={setOpenMP}/>
        <div id="menulogo">
            <img onClick={() => setOpenMP(!openMP)} id= "S" src={SibdoS}/>
            <img onClick={()=>navigate("/MainPage")} id= "O" src={SibdoO}/>
        </div>
            <div id="options">
                <p id="TheName" className={name ? 'selectedN' : ''} onClick={() => handleOptionClick('name')}>The Name</p>
                <p id="TheCompany" className={company ? 'selectedC' : ''} onClick={() => handleOptionClick('company')}>The Company</p>
                <p id="OurVision" className={vision ? 'selectedV' : ''} onClick={() => handleOptionClick('vision')}>Our Vision</p>
                <p id="OurMission" className={mission ? 'selectedM' : ''} onClick={() => handleOptionClick('mission')}>Our Mission</p>
            </div>
            <div id="selectedText">
                {name && <p>SIBDO was named after a natural tourist location in east<br></br> Darfur right beside Al-arab River (link between the nile and<br></br> white nile), it was a host for several cultural/entertainment/<br></br>historical events in the 60’s like the popular ceremony hosted <br></br>for the honor of president Jamal Abd-elnasir</p>}
                {company && <p>SIBDO Engineering Consultancy, established in 1973<br></br> and since then has designed and supervised a <br></br>number of building schemes and complexes, inside<br></br> and outside Khartoum. It is qualified and experienced <br></br>in the designing, consulting, valuating, and <br></br>supervising of buildings and engineering projects.</p>}
                {vision && <p>To be one of the leading<br></br> engineering institutes in<br></br>Africa and the Middle East</p>}
                {mission && <p> In our urge of continuous development, we add associates<br></br> in any specialized new major that assures the highest<br></br> quality of work possible. <br></br><br></br>Since 2017 we have started implementing the basics of<br></br> sustainability in our projects, as part of our social<br></br> responsibility and global approach. In addition to<br></br> minimalism which partially solves the economic crisis</p>}
            </div>
        </div>
    );
}
