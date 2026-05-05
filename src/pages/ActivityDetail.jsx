import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import activitiesData from "../data/activitiesData";

function ActivityDetail() {
  const { id } = useParams();

  const activity = activitiesData.find(
    (item) => item.id === parseInt(id)
  );

  if (!activity) {
    return (
      <div>
        <Navbar />
        <h1>Activity tidak ditemukan</h1>
      </div>
    );
  }

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < count ? "#EF9F27" : "#D3D1C7", fontSize: "20px" }}>
        ★
      </span>
    ));
  };

  return (
    <div style={styles.container}>
      <Navbar />

      <div style={styles.card}>

        <h1 style={styles.title}>{activity.title}</h1>
        <p style={styles.description}>{activity.description}</p>

        <hr style={styles.divider} />

        <div style={styles.section}>
          <p style={styles.label}>POPULARITAS</p>
          <div style={styles.stars}>{renderStars(activity.popularitas)}</div>
        </div>

        <div style={styles.section}>
          <p style={styles.label}>COCOK UNTUK</p>
          <div style={styles.tagRow}>
            {activity.cocokUntuk.map((item, i) => (
              <span key={i} style={styles.tagPersona}>{item}</span>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <p style={styles.label}>KATEGORI</p>
          <div style={styles.tagRow}>
            {activity.kategori.map((item, i) => (
              <span key={i} style={{ ...styles.tagKategori, ...tagColors[i % tagColors.length] }}>
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

const tagColors = [
  { background: "#EEEDFE", color: "#3C3489" },
  { background: "#E1F5EE", color: "#085041" },
  { background: "#FAECE7", color: "#712B13" },
  { background: "#FBEAF0", color: "#72243E" },
];

const styles = {
  container: {
    background: "#fdf6ff",
    minHeight: "100vh",
    padding: "30px",
    textAlign: "center",
  },

  card: {
    background: "#ffffff",
    maxWidth: "480px",
    margin: "30px auto",
    padding: "28px 32px",
    borderRadius: "16px",
    border: "0.5px solid #e5e5e5",
    textAlign: "center",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    margin: "0 0 8px",
    color: "#1a1a1a",
    padding: "10px 0"
  },

  description: {
    fontSize: "14px",
    color: "#888780",
    margin: "0 0 4px",
    lineHeight: "1.6",
  },

  divider: {
    border: "none",
    borderTop: "0.5px solid #e5e5e5",
    margin: "16px 0",
  },

  section: {
    marginBottom: "16px",
  },

  label: {
    fontSize: "11px",
    fontWeight: "500",
    color: "#B4B2A9",
    letterSpacing: "0.06em",
    margin: "0 0 6px",
  },

  stars: {
    display: "flex",
    gap: "2px",
    justifyContent: "center"
  },

  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    justifyContent: "center"
  },

  tagPersona: {
    fontSize: "12px",
    padding: "4px 12px",
    borderRadius: "8px",
    background: "#F1EFE8",
    color: "#5F5E5A",
    border: "0.5px solid #D3D1C7",
  },

  tagKategori: {
    fontSize: "12px",
    padding: "4px 12px",
    borderRadius: "999px",
  },
};

export default ActivityDetail;