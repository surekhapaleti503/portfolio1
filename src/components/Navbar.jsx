function Navbar() {

  const styles = {
    navbar: {
      position: "fixed",
      top: "0",
      width: "100%",
      zIndex: "1000",
      backgroundColor: "#0f1635",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      border:"2px solid #fff"
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      width:"100%",
      alignItems: "center",
      
    },

    logo: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#ffffff",
      cursor: "pointer",
      letterSpacing: "1px"
    },

    highlight: {
      color: "#38bdf8"
    },

    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "40px"
    },

    link: {
      textDecoration: "none",
      color: "#ffffff",
      fontSize: "1.5rem",
      fontWeight: "600",
      transition: "0.3s ease"
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>

        <h1 style={styles.logo}>
          <span style={styles.highlight}>P</span>ortfolio
        </h1>

        <ul style={styles.navLinks}>
          <li><a href="#home" style={styles.link}>Home</a></li>
          <li><a href="#about" style={styles.link}>About</a></li>
          <li><a href="#Projects" style={styles.link}>Projects</a></li>
          <li><a href="#skills" style={styles.link}>Skills</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;