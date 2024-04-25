import '../scss/contact.scss';
import contactpic from "../photos/contacts.png"

export default function Contact() {
    return <>
        <div id="contact1">
            <p id="title">Email</p>
            <p>sibdo.sd@gmail.com</p>
            <p>+1 (587) 917-2367</p>
        </div>
        <div id="contactImage">
            <img src={contactpic}/>
        </div>
        <div id="contact2">        
            <p id="title">Social Media</p>
            <p>IG</p>
            <p>Twitter</p>
            <p>TikTok</p>
            <p>Facebook</p>
        </div>

    </>
  }