import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Veriarvot from "./Veriarvot";
import Potilastiedot from "./Potilastiedot";
import Asetukset from "./Asetukset";
import KayntiTiedot from "./KayntiTiedot";
import ChatWindow from "./Chattibotti";
import "../css/App.css";

function Home({ language }) {
    let date = new Date().toLocaleDateString();
    return (
        <h1>
            {language === "fi"
                ? `Tervetuloa! Tänään on ${date}`
                : `Welcome! Today is ${date}`}
        </h1>
    );
}

function App() {
    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "fi"
    );
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const menuItems = [
        { path: "/", label: language === "fi" ? "Koti" : "Home" },
        {
            path: "/Veriarvot",
            label: language === "fi" ? "Veriarvot" : "Blood Values",
        },
        {
            path: "/Potilastiedot",
            label: language === "fi" ? "Potilastiedot" : "Patient Info",
        },
        {
            path: "/Asetukset",
            label: language === "fi" ? "Asetukset" : "Settings",
        },
    ];

    return (
        <div className={`center ${theme}`}>
            <nav>
                {menuItems.map((item) => (
                    <Link key={item.path} to={item.path}>
                        {item.label}
                    </Link>
                ))}
            </nav>

            <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route
                    path="/Veriarvot"
                    element={<Veriarvot language={language} />}
                />
                <Route
                    path="/Potilastiedot"
                    element={<Potilastiedot language={language} />}
                />
                <Route
                    path="/Asetukset"
                    element={
                        <Asetukset
                            language={language}
                            setLanguage={setLanguage}
                            theme={theme}
                            setTheme={setTheme}
                        />
                    }
                />
                <Route
                    path="/kaynti/:id"
                    element={<KayntiTiedot language={language} />}
                />
            </Routes>

            <div className="chatbot-container">
                <ChatWindow
                    language={language}
                    setLanguage={setLanguage}
                    theme={theme}
                    setTheme={setTheme}
                />
            </div>
        </div>
    );
}

export default App;
