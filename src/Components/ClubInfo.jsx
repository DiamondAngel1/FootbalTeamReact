import React from "react";
import logo from "../Photos/Flamengo.png";

const ClubInfo = () => {
    return (
        <div className={"card text-white mb-4"}>
            <div className={"card-body"}>
                <h2 className={"card-title"}>Футбольний клуб: Фламенго</h2>
                <p className={"card-text"}>Країна: Бразилія</p>
                <p className={"card-text"}>Місто: Ріо де Жанейро</p>
                <p className={"card-text"}>Дата заснування: 15 Листопада 1895 </p>
                <p className={"card-text"}>Кількість вболівальників може досягати 45 мільйонів людей</p>
                <img src={logo} alt="Герб Flamengo" className={"club-logo mt-3"}/>
            </div>
        </div>
    );
};

export default ClubInfo;