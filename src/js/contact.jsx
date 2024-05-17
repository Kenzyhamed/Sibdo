import '../scss/contact.scss';
import contactpic from "../photos/contacts.png"
import SibdoO from '../photos/SibdoO.png'
import SibdoS from '../photos/SibdoS.png'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Menu from '../js/Menu';
export default function Contact() {
    const [openMP, setOpenMP] = useState(false);

    const navigate = useNavigate();
    return(<>
        <Menu open={openMP} setOpen={setOpenMP}/>
        <div id="menulogoC">
            <img alt ="S" onClick={() => setOpenMP(!openMP)} id= "S" src={SibdoS}/>
            <img alt ="O" onClick={()=>navigate("/MainPage")} id= "O" src={SibdoO}/>
        </div>
        <div id="contact1">
            <p id="title">Email</p>
            <p>sibdo.sd@gmail.com</p>
            <p>+1 (587) 917-2367</p>
        </div>
        <div id="contactImage">
            <img alt ="contactpic" src={contactpic}/>
        </div>
        <div id="contact2">        
            <p id="title">Social Media</p>
            <p>IG</p>
            <p>Twitter</p>
            <p>TikTok</p>
            <p>Facebook</p>
        </div></>
  )
  }