import RecruiterImg from './Assets/recruiter.jpeg';
import DeveloperImg from './Assets/developer.jpg';
import StalkerImg from './Assets/stalker.jpg';
import AdventurerImg from './Assets/adventurer.jpg';


function App() {
  const profiles = [
    { name: "Recruiter", img: RecruiterImg },
    { name: "Developer", img: DeveloperImg },
    { name: "Stalker", img: StalkerImg },
    { name: "Adventurer", img: AdventurerImg },
  ];

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", fontFamily: "Arial, sans-serif" }}>Who’s Watching?</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        {profiles.map((profile, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={profile.img}
              alt={profile.name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "3px solid #fff",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{profile.name}</p>
          </div>
        ))}
      </div>
      <button
        style={{
          marginTop: "2rem",
          padding: "10px 20px",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#444",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#666")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#444")}
      >
        Manage Profiles
      </button>
    </div>
  );
}

export default App;
