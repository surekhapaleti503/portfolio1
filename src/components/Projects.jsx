function Projects() {

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
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap"
    },

    card: {
      width: "350px",
      background: "#252c4a",
      borderRadius: "20px",
      padding: "30px",
      boxShadow: "0 0 20px rgba(56,189,248,0.15)"
    },

    title: {
      fontSize: "1.8rem",
      fontWeight: "600",
      marginBottom: "15px"
    },

    description: {
      color: "#d1d5db",
      lineHeight: "1.8",
      marginBottom: "20px"
    },

    tech: {
      color: "#38bdf8",
      fontWeight: "600",
      marginBottom: "20px"
    },

    button: {
      padding: "12px 25px",
      border: "none",
      borderRadius: "30px",
      background: "#38bdf8",
      color: "#0f1635",
      fontWeight: "600",
      cursor: "pointer"
    }
  };

  return (
    <section id="Projects" style={styles.section}>

      <h1 style={styles.heading}>
        My <span style={styles.blueText}>Projects</span>
      </h1>

      <div style={styles.container}>

        {/* Project 1 */}
        <div style={styles.card}>
          <h2 style={styles.title}>
            Smart City FAP Distribution
          </h2>

          <p style={styles.description}>
            Intelligent distribution of fresh agricultural products
            in smart cities using optimization techniques to reduce
            cost and improve customer satisfaction.
          </p>

          <p style={styles.tech}>
            Fuzzy Logic • IQPSO • Simulation
          </p>

          
        </div>

        {/* Project 2 */}
        <div style={styles.card}>
          <h2 style={styles.title}>
            Data Analytics Dashboard
          </h2>

          <p style={styles.description}>
            Analyzed large datasets, performed SQL queries,
            maintained databases and created visualizations
            for business insights.
          </p>

          <p style={styles.tech}>
            SQL • Excel • Data Visualization
          </p>

          
        </div>

        {/* Project 3 */}
        <div style={styles.card}>
          <h2 style={styles.title}>
            Personal Portfolio Website
          </h2>

          <p style={styles.description}>
            Responsive portfolio website developed using
            React JS and Tailwind CSS with modern UI design
            and smooth animations.
          </p>

          <p style={styles.tech}>
            React JS • Tailwind CSS • JavaScript
          </p>

          
        </div>

      </div>

    </section>
  );
}

export default Projects;