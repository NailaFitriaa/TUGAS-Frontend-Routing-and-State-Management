import Navbar from "../components/Navbar";

function About() {
  return (
    <div style={styles.container}>
      <Navbar />

      {/* =========================
          ABOUT WEBSITE
      ========================= */}
      <h1 style={styles.title}>About Weekend Planner</h1>

      <p style={styles.description}>
        Weekend Planner adalah website sederhana yang membantu kamu menemukan
        kesibukan yang seru di weekendmu. Website ini dirancang buat kamu yang
        kadang hilang arah ngapain pas hari libur, biar weekend gak cuma rebahan
        dan overthinking.
      </p>

      {/* =========================
          OUR FEATURES
      ========================= */}
      <h2 style={styles.subtitle}>Our Features</h2>

      <div style={styles.featuresContainer}>
        <div style={styles.card}>
          <h3>✨ Personal Planner</h3>
          <p>Buat jadwal Sabtu & Minggu versi kamu sendiri.</p>
        </div>

        <div style={styles.card}>
          <h3>🌈 Planner Recommendationsr</h3>
          <p>Temukan ide kegiatan seru biar weekend lebih hidup.</p>
        </div>

        <div style={styles.card}>
          <h3>🩷 SelfCare Checklist</h3>
          <p>Recharge energi dengan checklist selfcare santai.</p>
        </div>

        <div style={styles.card}>
          <h3>😌 Mood Booster</h3>
          <p>Pilih mood kamu dan dapetin vibes yang relate.</p>
        </div>
      </div>

      {/* =========================
          OUR MISSION
      ========================= */}
      <h2 style={styles.subtitle}>Our Mission</h2>

      <p style={styles.quote}>
        "Gak apa-apa kalau weekend kamu gak selalu produktif. Kadang istirahat
        tanpa rasa bersalah juga termasuk progress"
      </p>
    </div>
  );
}

const styles = {
  container: {
    background: "#4A4869",
    minHeight: "100vh",
    padding: "30px",
    textAlign: "center",
  },

  title: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#F5F0E0",
  },

  description: {
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#D6CFCA",
  },

  subtitle: {
    marginTop: "60px",
    marginBottom: "25px",
    fontSize: "26px",
    color: "#F5F0E0",
  },

  featuresContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    background: "#D6CFCA",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    color: "#2D2B4A",
  },

  quote: {
    fontSize: "20px",
    fontStyle: "italic",
    color: "#F5F0E0",
    marginTop: "10px",
  },
};

export default About;
