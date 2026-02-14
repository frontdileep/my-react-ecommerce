import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkMode ? "#000" : "#fff",
    color: darkMode ? "#fff" : "#000",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: darkMode ? "#fff" : "#000",
    color: darkMode ? "#000" : "#fff",
  };

  return (
    <div style={containerStyle}>
      <h2>{darkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}</h2>

      <button
        style={buttonStyle}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Change to Light Mode" : "Change to Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
