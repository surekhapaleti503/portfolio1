import projects from "../data/projects";
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
  boxShadow: "0 0 20px rgba(56,189,248,0.15)",
  transition: "all 0.3s ease",
  cursor: "pointer"
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
  marginBottom: "20px",
  border: "1px solid #38bdf8",
  padding: "10px",
  borderRadius: "10px",
  textAlign: "center"
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
        {projects.map((project) => (
  <div key={project.id} style={styles.card}>
    
    <h2 style={styles.title}>
      {project.title}
    </h2>

    <p style={styles.description}>
      {project.description}
    </p>

    <div style={styles.tech}>
  {project.technologies}
</div>

<div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "20px"
  }}
>
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    style={{
      ...styles.button,
      textDecoration: "none"
    }}
  >
    GitHub
  </a>

  <a
    href={project.demo}
    target="_blank"
    rel="noreferrer"
    style={{
      ...styles.button,
      textDecoration: "none"
    }}
  >
    Live Demo
  </a>
</div>

  </div>
))}
      </div>

    </section>
  );
}

export default Projects;