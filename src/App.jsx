import React, {useEffect} from "react";
import ClubInfo from "./Components/ClubInfo";
import Achievements from "./Components/Achievements";
import Squad from "./Components/Squad";
import Clubs from "./Components/Clubs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    useEffect(() => {
        const themeCount = 5;
        const randomIndex = Math.floor(Math.random() * themeCount) + 1;
        document.body.className = `body-theme-${randomIndex}`;
    }, []);

    return (
        <div className="container">
            <h1>Інформація про футбольні клуби</h1>
            {Clubs.map((club, index) => (
                <div key={index}>
                    <ClubInfo Club={club} />
                    <Achievements Club={club} />
                    <Squad Club={club} />
                </div>
            ))}
        </div>
    );
};

export default App;