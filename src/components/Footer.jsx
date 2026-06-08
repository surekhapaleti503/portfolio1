import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

function Footer() {

  const styles = {
    footer: {
      background: "#0a1028",
      color: "white",
      textAlign: "center",
      padding: "40px 20px"
    },

    heading: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "15px"
    },

    blueText: {
      color: "#38bdf8"
    },

    text: {
      color: "#d1d5db",
      marginBottom: "25px",
      fontSize: "1rem"
    },

    icons: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "25px"
    },

    icon: {
      width: "50px",
      height: "50px",
      border: "2px solid #38bdf8",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#38bdf8",
      fontSize: "1.2rem",
      cursor: "pointer"
    },

    copyright: {
      borderTop: "1px solid rgba(255,255,255,0.2)",
      paddingTop: "20px",
      color: "#9ca3af"
    }
  };

  return (
    <footer style={styles.footer}>

      <h2 style={styles.heading}>
        Surekha <span style={styles.blueText}>Portfolio</span>
      </h2>

      <p style={styles.text}>
        Thank you for visiting my portfolio website.
      </p>

      <div style={styles.icons}>

        <div style={styles.icon}>
          <FaFacebookF />
        </div>

        <div style={styles.icon}>
          <FaInstagram />
        </div>

        <div style={styles.icon}>
          <FaLinkedinIn />
        </div>

        <div style={styles.icon}>
          <FaGithub />
        </div>

      </div>

      <div style={styles.copyright}>
        © 2026 Surekha. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;