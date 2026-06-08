import heroImg from "../assets/Surekha1.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Hero() {

  const styles = {
    hero: {
      minHeight: "100vh",
      background: "#0f1635",
      display: "flex",
      alignItems: "center",
      paddingTop: "100px",
      color: "white"
    },

    container: {
      width: "85%",
      maxWidth: "1200px",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "100px"
    },

    content: {
      flex: 1
    },

    h3: {
      fontSize: "3rem",
      fontWeight: "500",
      marginBottom: "5px"
    },

    h1: {
      fontSize: "5rem",
      fontWeight: "700",
      marginBottom: "10px"
    },

    h2: {
      fontSize: "3rem",
      marginBottom: "5px"
    },

    blueText: {
      color: "#38bdf8"
    },

    paragraph: {
      color: "#d1d5db",
      fontSize: "1.2rem",
      lineHeight: "1.8",
      maxWidth: "600px"
    },

    icons: {
      display: "flex",
      gap: "20px",
      marginTop: "35px",
      marginBottom: "35px"
    },

    icon: {
      width: "60px",
      height: "60px",
      border: "2px solid #38bdf8",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#38bdf8",
      fontSize: "1.5rem",
      cursor: "pointer",
      transition: "0.3s"
    },

    button: {
      padding: "15px 40px",
      border: "none",
      borderRadius: "40px",
      background: "#38bdf8",
      color: "#0f1635",
      fontSize: "1.2rem",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow: "0 0 25px #38bdf8"
    },

    imageContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center"
    },

    image: {
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #38bdf8",
      boxShadow: "0 0 50px rgba(56,189,248,0.6)"
    }
  };

  return (
    <>
      <style>
        {`
          .floating-image{
            animation: floatImage 4s ease-in-out infinite;
          }

          @keyframes floatImage{
            0%{
              transform: translateY(0px);
            }

            50%{
              transform: translateY(-25px);
            }

            100%{
              transform: translateY(0px);
            }
          }

          .social-icon:hover{
            background:#38bdf8;
            color:#0f1635 !important;
            transform: scale(1.1);
          }
        `}
      </style>

      <section id="home" style={styles.hero}>

        <div style={styles.container}>

          {/* Left Content */}
          <div style={styles.content}>

            <h3 style={styles.h3}>Hi, Myself</h3>

            <h1 style={styles.h1}>Surekha</h1>

            <h2 style={styles.h2}>
              And I'm a{" "}
              <span style={styles.blueText}>
                Frontend Developer
              </span>
            </h2>

            <p style={styles.paragraph}>
              Passionate web developer focused on building
              responsive, user-friendly and modern web
              applications using React JS, JavaScript,
              Tailwind CSS and Python.
            </p>

            <div style={styles.icons}>

              <div style={styles.icon} className="social-icon">
                <FaFacebookF />
              </div>

              <div style={styles.icon} className="social-icon">
                <FaInstagram />
              </div>

              <div style={styles.icon} className="social-icon">
                <FaXTwitter />
              </div>

              <div style={styles.icon} className="social-icon">
                <FaLinkedinIn />
              </div>

            </div>

            <a
  href="public\Surekha Paleti Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button style={styles.button}>
    Download CV
  </button>
</a>

          </div>

          {/* Right Image */}
          <div style={styles.imageContainer}>

          <img
  src={heroImg}
  alt="Surekha"
  loading="lazy"
  style={styles.image}
  className="floating-image"
/>

          </div>

        </div>

      </section>
    </>
  );
}

export default Hero;