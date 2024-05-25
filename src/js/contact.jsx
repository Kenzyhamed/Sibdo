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
            <img alt ="O" onClick={()=>navigate("/")} id= "O" src={SibdoO}/>
        </div>
        <div id="contact1">
            <p id="title">Email</p>
            <p id="email">sibdo.sd@gmail.com</p>
            <p id="number">+1 (587) 917-2367</p>
        </div>
        <div id="contactImage">
            <img alt ="contactpic" src={contactpic}/>
        </div>
        <div id="contact2">        
            <p id="title">Social Media</p>
            <p id="IG">IG</p>
            <p id="Twitter">Twitter</p>
            <p id="TikTok">TikTok</p>
            <p id="facebook">Facebook</p>
        </div></>
  )
  }