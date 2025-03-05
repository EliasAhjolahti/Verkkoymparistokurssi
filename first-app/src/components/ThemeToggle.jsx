import { useState } from "react";

export default function ThemeToggle(){
const[darkMode, setDarkMode] = useState(false);


const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
}

return(
    <div
    style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",

    }}
    >
    <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
    <button
    onClick={toggleTheme}
    style={{
        fontSize: "16px"
    }}
    >
        Toggle Theme
    </button>

    </div>
);
}