import '../scss/MainPage.scss';
import ArrowHead from '../photos/ArrowHead.png';
import MainLogo from '../photos/MainLogo.png';
import oldFlag from '../photos/oldFlag.png';
import image7 from '../photos/image 7.png';
import Rectangle1 from '../photos/Rectangle 1.png';
import currentFlag from '../photos/currentFlag.png';
export default function MainPage() {
    
    return (<div id="main"><div id="mainpage">

        <section id="page1">
            <div id="maintext1">
                <img id="Arrow" src={ArrowHead}/>
                <p id="menuclick">Click Here to Access Menu</p>
                <p id="info">A tourist location in east Darfur<br></br>known to host many historical &<br></br> cultural events</p>
            </div>
            <img id="mainlogo"src={MainLogo}/>
        </section>

        <section id="page2">
            <div id="maintext2">
                <p>MADE IN</p>
                <p>SUDAN</p>
                <p>BY &nbsp;<img src={currentFlag}/></p>
                <p>FOR &nbsp;<img src={oldFlag}/></p>
            </div>
        </section>


        <section id="page3">
            <img id="left" src={Rectangle1}/>
            <img id="right" src={image7}/>
            <div id="maintext3">
                <p>Who<br></br>We<br></br>Are</p>
                <p>What<br></br>We<br></br>Do</p>
            </div>
        </section>
        
        <footer id="footer">
            <ul>
                <li>Contact</li>
                <li>Careers</li>
                <li>Initaitives</li>
                <li>Work</li>
            </ul>
        </footer>
        

    </div></div>);
  }