import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const styles = {
    section: {
      minHeight: "100vh",
      background: "#0f1635",
      color: "white",
      padding: "100px 8%"
    },

    heading: {
      textAlign: "center",
      fontSize: "4rem",
      fontWeight: "700",
      marginBottom: "70px"
    },

    blueText: {
      color: "#38bdf8"
    },

    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "80px",
      flexWrap: "wrap"
    },

    left: {
      flex: "1"
    },

    right: {
      flex: "1"
    },

    info: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "25px",
      fontSize: "1.2rem"
    },

    icon: {
      color: "#38bdf8",
      fontSize: "1.5rem"
    },

    link: {
      color: "white",
      textDecoration: "none"
    },

    input: {
      width: "100%",
      padding: "15px",
      marginBottom: "20px",
      borderRadius: "10px",
      border: "none",
      background: "#252c4a",
      color: "white",
      fontSize: "1rem",
      boxSizing: "border-box"
    },

    textarea: {
      width: "100%",
      height: "150px",
      padding: "15px",
      borderRadius: "10px",
      border: "none",
      background: "#252c4a",
      color: "white",
      fontSize: "1rem",
      resize: "none",
      marginBottom: "20px",
      boxSizing: "border-box"
    },

    button: {
      padding: "15px 35px",
      border: "none",
      borderRadius: "40px",
      background: "#38bdf8",
      color: "#0f1635",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow: "0 0 20px #38bdf8"
    }
  };

  return (
    <section id="contact" style={styles.section}>

      <h1 style={styles.heading}>
        Contact <span style={styles.blueText}>Me</span>
      </h1>

      <div style={styles.container}>

        {/* Left Side */}

        <div style={styles.left}>

          <div style={styles.info}>
            <FaEnvelope style={styles.icon} />
            <span>surekhapaleti503@gmail.com</span>
          </div>

          <div style={styles.info}>
            <FaPhone style={styles.icon} />
            <span>+91 9492165187</span>
          </div>

          <div style={styles.info}>
            <FaLinkedin style={styles.icon} />
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              LinkedIn Profile
            </a>
          </div>

          <div style={styles.info}>
            <FaGithub style={styles.icon} />
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              GitHub Profile
            </a>
          </div>

        </div>

        {/* Right Side */}

        <div style={styles.right}>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              style={styles.input}
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value
                })
              }
            />

            <input
              type="email"
              placeholder="Your Email"
              style={styles.input}
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value
                })
              }
            />

            <textarea
              placeholder="Your Message"
              style={styles.textarea}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value
                })
              }
            />

            <button
              type="submit"
              style={styles.button}
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;