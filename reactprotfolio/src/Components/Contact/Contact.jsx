import React from "react";
import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCommentDots
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    window.open(
      `https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new=${subject}&body=${body}`
    );
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.header}>
        <FaEnvelope className={styles.icon} />
        <h2>Let's Connect</h2>
        <p>
          Have a project in mind, a question, or just want to say hello? I'd
          love to hear from you!
        </p>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.container}>
        {/* Contact Form */}
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" name="name" placeholder="e.g. Jane Doe" required />

            <label>Your Email Address</label>
            <input type="email" name="email" placeholder="you@example.com" required />

            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project or query..."
              rows="5"
              required
            ></textarea>

            <button type="submit" className={styles.sendBtn}>
              <FaEnvelope /> Send Email
            </button>
          </form>
        </div>

        {/* Right Side: Follow Me + Contact Info + Content */}
        <div className={styles.rightSide}>
          {/* Follow Me */}
          <div className={styles.box}>
            <h1>Follow Me</h1><br></br>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Naveen939258?tab=repositories" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kakarla-naveen-2092411b3/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://x.com/Naveen99413" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=919392589802&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                <FaCommentDots />
              </a>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.box}>
            <h1>Contact Information</h1>
            <br></br>
            <p>
              <FaEnvelope className={styles.infoIcon} /> <strong>Personal Email</strong>
              <br />
              <a href="mailto:naveenkakarla4@gmail.com">
                naveenkakarla4@gmail.com
              </a>
            </p>
            <p>
              <FaEnvelope className={styles.infoIcon} />{" "}
              <strong>Professional Email</strong>
              <br />
              <a href="mailto:2200031998cseh@gmail.com">
                2200031998cseh@gmail.com
              </a>
            </p>
          </div>

          {/* Content Box */}
          <div className={styles.box}>
            <p className={styles.note}>
              Whether it's a project idea, a question, or just a friendly chat,
              my inbox is always open. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
