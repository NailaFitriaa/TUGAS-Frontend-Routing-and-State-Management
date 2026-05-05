import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

function SelfCare() {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem("selfCareChecklist");
    return saved ? JSON.parse(saved) : [];
  });

  const selfCareList = [
    "Minum air putih cukup",
    "Tidur lebih awal",
    "Journaling / menulis isi pikiran",
    "Stretching atau jalan santai",
    "Digital detox 2 jam",
  ];

  const moodOptions = [
    {
      emoji: "😵",
      mood: "Burnout",
      recommendation:
        "yahh lagi kacau ya, gapapa tetap semangat ya harus nikmatin weekendmu yang kacau ini dengan kicau kicau mania.",
    },
    {
      emoji: "🙂",
      mood: "Capek",
      recommendation: "yahh kok capek, kenapa capek kan hari ini weekend.",
    },
    {
      emoji: "😌",
      mood: "Santai",
      recommendation: "good job kawan, kamu menikmati weekendmu dengan baik",
    },
  ];

  const [selectedMood, setSelectedMood] = useState(null);

  // =========================
  // LOCAL STORAGE
  // =========================
  useEffect(() => {
    localStorage.setItem(
      "selfCareChecklist",
      JSON.stringify(checkedItems)
    );
  }, [checkedItems]);

  // =========================
  // HANDLE CHECKLIST
  // =========================
  const handleCheck = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(
        checkedItems.filter((check) => check !== item)
      );
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  // =========================
  // RESET CHECKLIST
  // =========================
  const handleReset = () => {
    setCheckedItems([]);
    localStorage.removeItem("selfCareChecklist");
  };

  // =========================
  // TAMPILAN
  // =========================
  return (
    <div style={styles.container}>
      <Navbar />

      {/* JUDUL */}
      <h1 style={styles.title}>SelfCare Weekend</h1>

      {/* QUOTE */}
      <p style={styles.quote}>
        “Weekend gak harus produktif, yang penting kamu recharge.”
      </p>

      {/* =========================
          MOOD BOOSTER
      ========================= */}
      <h2 style={styles.subtitle}>Gimana hari ini?</h2>

      <div style={styles.moodContainer}>
        {moodOptions.map((item, index) => (
          <button
            key={index}
            style={styles.moodBtn}
            onClick={() => setSelectedMood(item)}
          >
            {item.emoji} {item.mood}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div style={styles.recommendBox}>
          <h3>
            {selectedMood.emoji} {selectedMood.mood}
          </h3>
          <p>{selectedMood.recommendation}</p>
        </div>
      )}

      {/* =========================
          SELFCARE CHECKLIST
      ========================= */}
      <h2 style={styles.subtitle}>SelfCare Checklist</h2>

      <div style={styles.checklistBox}>
        {selfCareList.map((item, index) => (
          <label key={index} style={styles.checkItem}>
            <input
              type="checkbox"
              checked={checkedItems.includes(item)}
              onChange={() => handleCheck(item)}
            />
            {item}
          </label>
        ))}
      </div>

      <button style={styles.resetBtn} onClick={handleReset}>
        Reset Weekend
      </button>
    </div>
  );
}

const styles = {
  container: {
    background: "#fdf6ff",
    minHeight: "100vh",
    padding: "30px",
    textAlign: "center",
  },

  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },

  quote: {
    fontSize: "18px",
    fontStyle: "italic",
    color: "#7b5ea7",
    marginBottom: "40px",
  },

  subtitle: {
    fontSize: "24px",
    marginTop: "40px",
    marginBottom: "20px",
  },

  moodContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },

  moodBtn: {
    background: "#ffe0f0",
    border: "none",
    padding: "12px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  },

  recommendBox: {
    background: "#ffffff",
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  checklistBox: {
    background: "#ffffff",
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
  },

  checkItem: {
    display: "block",
    marginBottom: "15px",
    fontSize: "16px",
  },

  resetBtn: {
    marginTop: "20px",
    background: "#c084fc",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default SelfCare;