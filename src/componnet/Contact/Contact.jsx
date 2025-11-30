import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f83a690c-f5b1-4a0f-9062-2a389b2f865a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=''/></h3>
            <p>💬If you have any questions, feedback, or face any issues while using our
                 platform, feel free to reach out to us. We’re here to assist you and 
                 ensure you have the best experience possible. Just drop us a message, 
                 and our team will get back to you shortly.
            </p>
            <ul>
                <li> <img src={mail_icon} alt=''/> Email: sahutany0808.com</li>
                <li> <img src={phone_icon} alt=''/> Phone: +1 (800) 234-5678</li>
                <li> <img src={location_icon} alt=''/> Address: 123 Learning Avenue, Innovation Park, San Francisco, CA 94107, USA</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text'name='name' placeholder='Enter your name' required/>
                <label>Your Email</label>
                <input type='email'name='email' placeholder='Enter your email' required/>
                <label>Phone Number</label>
                <input type='tel'name='phone' placeholder='Enter your phone number' required/>
                <label>Your Message</label>
                <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Send Message <img src={white_arrow} alt='' /></button>
            </form>
            <span>{result}</span>

        </div>
    </div>
  )
}

export default Contact