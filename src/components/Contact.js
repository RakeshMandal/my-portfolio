import React from 'react';
import '../styles/Contact.css';
const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <p className="contact-intro">
                I’m always open to new opportunities, collaborations, or just a friendly chat.
            </p>
            <form
                className="contact-form"
                action="https://formsubmit.co/f/4ed7585323e9ee96c1f4a94bf65425bc"
                method="POST"
            >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://rakeshportfolio.com/thank-you" />

                <input type="text" name="name" placeholder="Your Name" required autoComplete="username" />
                <input type="email" name="email" placeholder="Your Email" required autoComplete="email" />
                <textarea name="message" placeholder="Your Message" rows="5" required autoComplete="off" />
                <button type="submit">Send Message</button>
            </form>

            <div className="social-links">
                <a
                    href="https://github.com/RakeshMandal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img src="/github.svg" alt="GitHub" />
                </a>
                <a
                    href="https://www.linkedin.com/in/rakesh-kumar-m-8a799785/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img src="/linkedin.svg" alt="LinkedIn" width="20" height="20" />
                </a>
                <a
                    href="mailto:rakeshmandal0502@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img src="/gmail.svg" alt="Email" />
                </a>
            </div>
        </section>
    );
};

export default Contact;
