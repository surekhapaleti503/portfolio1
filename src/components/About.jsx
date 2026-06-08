import aboutImg from "../assets/Surekha1.png";

function About() {

  const styles = {
    section: {
      minHeight: "100vh",
      background: "#252c4a",
      display: "flex",
      alignItems: "center",
      color: "white",
      padding: "80px 10%"
    },

    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "100px",
      width: "100%"
    },

    image: {
      width: "450px",
      height: "450px",
      objectFit: "cover",
      borderRadius: "40px",
      border: "4px solid #4ea8ff",
      boxShadow: "0 0 25px rgba(78,168,255,0.5)"
    },

    content: {
      flex: 1
    },

    heading: {
      fontSize: "4rem",
      fontWeight: "700",
      marginBottom: "10px"
    },

    blueText: {
      color: "#4ea8ff"
    },

    role: {
      fontSize: "2rem",
      fontWeight: "600",
      marginBottom: "20px"
    },

    paragraph: {
      fontSize: "1.3rem",
      lineHeight: "1.8",
      color: "#e5e7eb",
      marginBottom: "35px"
    },

    button: {
      padding: "15px 40px",
      border: "none",
      borderRadius: "40px",
      background: "#4ea8ff",
      color: "#0f1635",
      fontSize: "1.2rem",
      cursor: "pointer",
      boxShadow: "0 0 25px #4ea8ff"
    }
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>

        {/* Left Image */}
        <div>
          <img
            src={aboutImg}
            alt="Surekha"
            style={styles.image}
          />
        </div>

        {/* Right Content */}
        <div style={styles.content}>

          <h1 style={styles.heading}>
            About <span style={styles.blueText}>Me</span>
          </h1>

          <h2 style={styles.role}>
            Frontend Developer
          </h2>

          <p style={styles.paragraph}>
            I am Surekha, a passionate Frontend Developer with
            experience in building responsive and interactive web
            applications. I enjoy creating modern user interfaces
            using React JS, JavaScript, Tailwind CSS and other
            frontend technologies.
          </p>

          <button style={styles.button}>
            Read More
          </button>

        </div>

      </div>
    </section>
  );
}

export default About;