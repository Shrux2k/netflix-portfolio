import React, { useState } from "react";
import RecruiterImg from "./Assets/recruiter.jpeg";
import DeveloperImg from "./Assets/developer.jpg";
import StalkerImg from "./Assets/stalker.jpg";
import AdventurerImg from "./Assets/adventurer.jpg";
import "./App.css";

function App() {
  const [stage, setStage] = useState("start"); // Stages: "start", "intro", "profiles"

  const playIntro = () => {
    // Use HTML5 Audio for playback
    const audio = new Audio(require("./Assets/netflix_intro.mp3"));
    audio.play();

    // Transition to the intro animation
    setStage("intro");

    // After 3 seconds, move to the profiles screen
    setTimeout(() => setStage("profiles"), 3000);
  };

  const profiles = [
    { name: "Recruiter", img: RecruiterImg },
    { name: "Developer", img: DeveloperImg },
    { name: "Stalker", img: StalkerImg },
    { name: "Adventurer", img: AdventurerImg },
  ];

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", height: "100vh" }}>
      {stage === "start" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <button
            onClick={playIntro}
            style={{
              padding: "15px 30px",
              fontSize: "1.5rem",
              backgroundColor: "#e50914",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b00710")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e50914")}
          >
            View my Portfolio!
          </button>
        </div>
      )}

      {stage === "intro" && (
        <div className="intro-animation">
          <h1 className="intro-text">SHASHANK REDDY</h1>
        </div>
      )}

      {stage === "profiles" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "2rem",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Who’s Watching?
          </h1>
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
      )}
    </div>
  );
}

export default App;
