import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Navbar />

      {/* =========================
          BANNER HERO
      ========================= */}
      <div style={styles.bannerOuter}>

        {/* dekorasi pojok kiri */}
        <div style={styles.dekorKiriAtas}>🌸</div>
        <div style={styles.dekorKiriBawah}>💜</div>

        {/* dekorasi pojok kanan */}
        <div style={styles.dekorKananAtas}>⭐</div>
        <div style={styles.dekorKananBawah}>🌿</div>

        {/* card tengah */}
        <div style={styles.bannerCard}>
          <p style={styles.bannerSub}>halo, selamat datang ✨</p>
          <h1 style={styles.bannerTitle1}>weekend</h1>
          <h1 style={styles.bannerTitle2}>planner</h1>
          <p style={styles.bannerScript}>just for you 🤍</p>

          <div style={styles.btnRow}>
            <button style={styles.btnPrimary} onClick={() => navigate("/activities")}>
              Explore Aktivitas
            </button>
            <button style={styles.btnSecondary} onClick={() => navigate("/selfcare")}>
              SelfCare Tips
            </button>
          </div>
        </div>

      </div>

      {/* =========================
          TAGLINE BAWAH
      ========================= */}
      <p style={styles.tagline}>
        Gak perlu nunggu mood sempurna — weekendmu bisa dimulai dari sini. 🌙
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

  bannerOuter: {
    position: "relative",
    background: "#8B96BB",
    borderRadius: "24px",
    padding: "0",
    maxWidth: "860px",
    margin: "70px auto 0",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "420px",
  },

  dekorKiriAtas: {
    position: "absolute",
    top: "24px",
    left: "32px",
    fontSize: "48px",
    opacity: 0.85,
  },

  dekorKiriBawah: {
    position: "absolute",
    bottom: "28px",
    left: "60px",
    fontSize: "36px",
    opacity: 0.6,
  },

  dekorKananAtas: {
    position: "absolute",
    top: "20px",
    right: "40px",
    fontSize: "40px",
    opacity: 0.8,
  },

  dekorKananBawah: {
    position: "absolute",
    bottom: "24px",
    right: "36px",
    fontSize: "44px",
    opacity: 0.75,
  },

  bannerCard: {
    background: "#D6CFCA",
    borderRadius: "18px",
    padding: "36px 48px",
    maxWidth: "380px",
    width: "100%",
    border: "1.5px dashed #8B96BB",
    zIndex: 1,
  },

  bannerSub: {
    fontSize: "13px",
    color: "#2D2B4A",
    fontWeight: "600",
    letterSpacing: "0.05em",
    margin: "0 0 6px",
  },

  bannerTitle1: {
    fontSize: "48px",
    fontWeight: "900",
    color: "#2D2B4A",
    margin: "0",
    lineHeight: "1.1",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },

  bannerTitle2: {
    fontSize: "48px",
    fontWeight: "900",
    color: "#4A4869",
    margin: "0 0 8px",
    lineHeight: "1.1",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },

  bannerScript: {
    fontSize: "20px",
    fontStyle: "italic",
    color: "#2D2B4A",
    margin: "0 0 24px",
  },

  btnRow: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  btnPrimary: {
    fontSize: "13px",
    padding: "10px 22px",
    borderRadius: "999px",
    background: "#4A4869",
    color: "#F5F0E0",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
  },

  btnSecondary: {
    fontSize: "13px",
    padding: "10px 22px",
    borderRadius: "999px",
    background: "transparent",
    color: "#2D2B4A",
    border: "1.5px solid #4A4869",
    cursor: "pointer",
    fontWeight: "600",
  },

  stamp: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "2px dashed #D6CFCA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  stampText: {
    fontSize: "9px",
    color: "#F5F0E0",
    fontWeight: "700",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: "1.4",
  },

  tagline: {
    fontSize: "15px",
    color: "#D6CFCA",
    fontStyle: "italic",
    marginTop: "28px",
  },
};

export default Home;