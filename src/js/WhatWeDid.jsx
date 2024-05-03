import '../scss/WhatWeDid.scss';
import AlQasr from '../photos/Al-Qasr.png';
import WNB from '../photos/WNB.png';
import RiyadhResidence from '../photos/RiyadhResidence.png';
import RiyadhResidence2 from '../photos/RiyadhResidence2.png';
import AlShamal from '../photos/AlShamal.png';
import Hilton from '../photos/Hilton.png';
import UofK from '../photos/UofK.png';

export default function WhatWeDid() {
    return (
    
    <div id="WWD">
        <div id="row1">
            <img src={AlQasr} alt="Al-Qasr Office Building"/>
        </div>
        <p>Al-Qasr Office Building</p>
        <div id="row2">
            <img src={WNB}/>
            <img src={RiyadhResidence}/>
        </div>
        <p>Workers National Bank</p>
        <p>Riyadh Resience</p>
        <div id="row3">
            <img src={AlShamal}/>
        </div>
        <p>A-Shamal Islamic Bank</p>
        <div id="row4">
            <img src={Hilton}/>
            <img src={RiyadhResidence2}/>
        </div>
        <p>Hilton Hotel</p>
        <p>Riyadh Residence</p>
        <div id="row5">
            <img src={UofK}/>
        </div>
        <p>University of Khartoum; Faculty of Medicine Mosque</p>


    </div>);
  }