import '../scss/WorkWithUs.scss';
import sibdoPic from '../photos/sibdoPic.png';
export default function WorkWithUs() {
    return <>
        <div id="text">
            <span>
            <img  alt ="Sibdo" src={sibdoPic}/>
            <p>is looking for individuals who are passionate about architecture and the built <br></br>world.</p>
            <p>Currently all opportunities available are part-time unpaid positions.</p>
            <p>High school, undergrad & graduate positions are open to those who would like<br></br>to make a change</p>
            <p>Email us your resume, portfolio if available and any additional work or <br></br>accomplishments wanting to be shared</p>
            <p>sibdo.sd@gmail.com</p>
            </span>
        </div>

        <div id="disclaimer">
            <p>*Portfolio is not required to be eligible to work with us, screenshots of art/architecture/<br></br>engineering work are also accepted. We want creatives and innovators.</p>
        </div>
    </>
  }