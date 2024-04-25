import '../scss/Menu.scss';
import ArrowHead from '../photos/ArrowHead.png';
import ArrowTail from '../photos/ArrowTail.png';
import MenuPic from '../photos/MenuPic.png';
export default function Menu() {
    return <div id="Menu">
        <img id= "MenuPic" src={MenuPic}/>
        <div id="Contents">
            <div id="MenuContents1">
                <p>Who Are We</p>
                <p>Who We Do </p>
                <p>Companies</p>
            </div>
            <div id="MenuContents2">
                <p>Initiatives</p>
                <p>Work With Us </p>
                <p>Talk To Us</p>
            </div>
        </div>
        <img id= "ArrowHead" src={ArrowHead}/>
        <img id= "ArrowTail" src={ArrowTail}/>
        <div id="alt">
            <p>Adam Musa Madibo;</p>
            <p>Former & Youngest Sudanese Minister of Defense<br></br>PhD. Civil Eng.<br></br>SIBDO Engineering Consultancy Founder</p>
        </div>
    </div>

  }