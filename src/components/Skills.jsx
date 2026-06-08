function Skills() {

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
      marginBottom: "80px"
    },

    blueText: {
      color: "#38bdf8"
    },

    container: {
      display: "flex",
      justifyContent: "space-between",
      gap: "100px"
    },

    column: {
      flex: 1
    },

    skillBox: {
      marginBottom: "50px"
    },

    skillHeader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      fontSize: "1.5rem",
      fontWeight: "600"
    },

    progressBar: {
      width: "100%",
      height: "12px",
      background: "#e5e7eb",
      borderRadius: "10px",
      overflow: "hidden"
    },

    progress: {
      height: "100%",
      background: "#38bdf8",
      borderRadius: "10px"
    }
  };

  return (
    <section id="skills" style={styles.section}>

      <h1 style={styles.heading}>
        My <span style={styles.blueText}>Skills</span>
      </h1>

      <div style={styles.container}>

        {/* Left Side */}
        <div style={styles.column}>

          <div style={styles.skillBox}>
            <div style={styles.skillHeader}>
              <span>SQL</span>
              <span style={styles.blueText}>90%</span>
            </div>

            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "90%" }} />
            </div>
          </div>

          <div style={styles.skillBox}>
            <div style={styles.skillHeader}>
              <span>React JS</span>
              <span style={styles.blueText}>85%</span>
            </div>

            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "85%" }} />
            </div>
          </div>

          <div style={styles.skillBox}>
            <div style={styles.skillHeader}>
              <span>Javascript</span>
              <span style={styles.blueText}>90%</span>
            </div>

            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "90%" }} />
            </div>
          </div>

          
        </div>

        {/* Right Side */}
        <div style={styles.column}>

          <div style={styles.skillBox}>
            <div style={styles.skillHeader}>
              <span>HTML</span>
              <span style={styles.blueText}>95%</span>
            </div>

            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "95%" }} />
            </div>
          </div>

          <div style={styles.skillBox}>
            <div style={styles.skillHeader}>
              <span>CSS</span>
              <span style={styles.blueText}>95%</span>
            </div>

            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "95%" }} />
            </div>
          </div>

          <div style={styles.skillBox}>
            <div style={styles.skillHeader}>
              <span>JavaScript</span>
              <span style={styles.blueText}>80%</span>
            </div>

            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "80%" }} />
            </div>
          </div>

          
        </div>

      </div>

    </section>
  );
}

export default Skills;