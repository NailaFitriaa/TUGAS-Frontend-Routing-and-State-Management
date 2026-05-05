import Navbar from "../components/Navbar";
import activitiesData from "../data/activitiesData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Activities() {
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [time, setTime] = useState("");
  const [activity, setActivity] = useState("");

  // =========================
  //  FUNGSI DATA PLANNER PRIBADI
  // =========================
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("activitiesByDay");
    return saved
      ? JSON.parse(saved)
      : {
          sabtu: [],
          minggu: [],
        };
  });

  useEffect(() => {
    localStorage.setItem("activitiesByDay", JSON.stringify(data));
  }, [data]);

  const openModal = (day) => {
    setSelectedDay(day);
    setOpen(true);
  };

  const handleAdd = () => {
    if (!time || !activity) return;

    const newItem = {
      id: Date.now(),
      time,
      activity,
    };

    setData({
      ...data,
      [selectedDay]: [...data[selectedDay], newItem],
    });

    setTime("");
    setActivity("");
  };

  const handleDelete = (day, id) => {
    const updatedItems = data[day].filter((item) => item.id !== id);

    setData({
      ...data,
      [day]: updatedItems,
    });
  };

  // =========================
  // RESET SEMUA PLANNER PRIBADI
  // =========================
  const handleResetPlanner = () => {
    const resetData = {
      sabtu: [],
      minggu: [],
    };

    setData(resetData);
    localStorage.removeItem("activitiesByDay");
  };

  // =========================
  // TAMPILAN
  // =========================
  return (
    <div style={styles.container}>
      <Navbar />

      {/* JUDUL UTAMA */}
      <h1 style={styles.title}>Weekend Planner</h1>




      {/* =========================
          PLANNER PRIBADI
      ========================= */}
      <h2 style={styles.personalTitle}>Personal Planner</h2>

      <div style={styles.dayContainer}>
        {/* SABTU */}
        <div
          style={styles.activityCard}
          onClick={() => openModal("sabtu")}
        >
          <h3>⭐ Sabtu ⭐</h3>
          <p>Klik untuk mengatur kegiatan hari Sabtu</p>
        </div>

        {/* MINGGU */}
        <div
          style={styles.activityCard}
          onClick={() => openModal("minggu")}
        >
          <h3>⭐ Minggu ⭐</h3>
          <p>Klik untuk mengatur kegiatan hari Minggu</p>
        </div>
      </div>

      <button style={styles.resetBtn} onClick={handleResetPlanner}>
        Reset Weekend
      </button>



      {/* =========================
          REKOMENDASI PLANNER
      ========================= */}
      <h2 style={styles.subtitle}>Planner Recommendations</h2>

      <div style={styles.recommendContainer}>
        {activitiesData.map((item) => (
          <Link
            key={item.id}
            to={`/activities/${item.id}`}
            style={styles.linkCard}
          >
            <div style={styles.activityCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* =========================
          DETAIL POPUP PLANNER PRIBADI
      ========================= */}
      {open && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2>Jadwal {selectedDay}</h2>

            <input
              style={styles.input}
              type="text"
              placeholder="Jam (08.00)"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <input
              style={styles.input}
              type="text"
              placeholder="Kegiatan"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />

            <button style={styles.addBtn} onClick={handleAdd}>
              Tambah
            </button>

            <hr />

            {data[selectedDay]?.length === 0 ? (
              <p>Belum ada kegiatan</p>
            ) : (
              <ul style={styles.list}>
                {data[selectedDay].map((item) => (
                  <li key={item.id} style={styles.listItem}>
                    <span>
                      {item.time} - {item.activity}
                    </span>

                    <button
                      style={styles.deleteBtn}
                      onClick={() =>
                        handleDelete(selectedDay, item.id)
                      }
                    >
                      Hapus
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <button style={styles.closeBtn} onClick={() => setOpen(false)}>
              Tutup
            </button>
          </div>
        </div>
      )}
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
    marginBottom: "10px",
  },

  personalTitle: {
    marginTop: "50px",
    marginBottom: "20px",
    fontSize: "24px",
  },

  subtitle: {
    marginTop: "50px",
    marginBottom: "20px",
    fontSize: "24px",
  },

  dayContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  dayBtn: {
    background: "#ffe0f0",
    border: "none",
    padding: "12px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  },

  resetBtn: {
    marginTop: "20px",
    background: "#ffb3c6",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
  },

  recommendContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  linkCard: {
    textDecoration: "none",
    color: "inherit",
  },

  activityCard: {
    background: "#ffffff",
    padding: "15px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.2s",
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "15px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },

  input: {
    width: "90%",
    padding: "8px",
    margin: "5px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  addBtn: {
    background: "#c084fc",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },

  closeBtn: {
    marginTop: "10px",
    background: "#ddd",
    border: "none",
    padding: "8px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  list: {
    textAlign: "left",
    marginTop: "10px",
    listStyle: "none",
    padding: 0,
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
    background: "#f9f9f9",
    padding: "8px",
    borderRadius: "8px",
  },

  deleteBtn: {
    background: "#ff8fa3",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Activities;