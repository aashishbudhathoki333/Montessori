import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="section-tag">
            GET IN TOUCH
          </span>

          <h2>
            We'd Love to
            <span>Hear From You</span>
          </h2>

          <p>
            Have a question about admissions, our programs, or
            school life? Send us a message and our team will be
            happy to help.
          </p>

          <div className="contact-info">

            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <strong>Visit Us</strong>
                <span>School Road, Your City, Nepal</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone size={20} />
              </div>

              <div>
                <strong>Call Us</strong>
                <span>+977 98XXXXXXXX</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <strong>Email Us</strong>
                <span>info@littlestarsschool.com</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Clock size={20} />
              </div>

              <div>
                <strong>School Hours</strong>
                <span>Sunday – Friday, 9:00 AM – 4:00 PM</span>
              </div>
            </div>

          </div>
        </div>

        <div className="contact-form-wrapper">

          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write your message here..."
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <Send size={17} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;