import React from "react";
import ClubInfo from "./Components/ClubInfo";
import Achievements from "./Components/Achievements";
import Squad from "./Components/Squad";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <div className={"container"}>
            <h1>Інформація про Фламенго</h1>
            <ClubInfo/>
            <Achievements/>
            <Squad/>
        </div>
    );
};

export default App;