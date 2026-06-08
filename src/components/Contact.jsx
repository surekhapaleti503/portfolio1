import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {

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

    input: {
      width: "100%",
      padding: "15px",
      marginBottom: "20px",
      borderRadius: "10px",
      border: "none",
      background: "#252c4a",
      color: "white",
      fontSize: "1rem"
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
      marginBottom: "20px"
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
            <span>linkedin.com/in/surekha</span>
          </div>

          <div style={styles.info}>
            <FaGithub style={styles.icon} />
            <span>github.com/surekha</span>
          </div>

        </div>

        {/* Right Side */}
        <div style={styles.right}>

          <form>

            <input
              type="text"
              placeholder="Your Name"
              style={styles.input}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={styles.input}
            />

            <textarea
              placeholder="Your Message"
              style={styles.textarea}
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