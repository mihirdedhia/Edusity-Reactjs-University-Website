import React from "react"
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email Sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="message icon" /></h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem explicabo numquam dolorem dignissimos dolorum perspiciatis consectetur iusto ad dolores pariatur, inventore reprehenderit consequuntur delectus sequi a. Repudiandae, facere omnis.</p>
                <ul>
                    <li><img src={mail_icon} alt="icons" />Contact@Edusity.com</li>
                    <li><img src={phone_icon} alt="icons" />+1 123-456-7890</li>
                    <li><img src={location_icon} alt="icons" />77 Massachusetts Ave, Cambridge<br /> MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" placeholder="Enter your Name" required />
                    <label htmlFor="phone">Your Phone</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                    <label htmlFor="message">Write your messages here</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="arrow icon" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact