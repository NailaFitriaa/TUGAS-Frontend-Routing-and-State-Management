import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/activities" style={styles.link}>Activities</Link>
      <Link to="/selfcare" style={styles.link}>SelfCare</Link>
      <Link to="/about" style={styles.link}>About</Link>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    background: "#8b8fad",
    padding: "10px 20px",
    borderRadius: "20px",
    width: "fit-content",
    margin: "0 auto 30px auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },

  link: {
    textDecoration: "none",
    color: "#f8f5ee",
    fontWeight: "500",
    padding: "6px 12px",
    borderRadius: "10px",
  },
};

export default Navbar;