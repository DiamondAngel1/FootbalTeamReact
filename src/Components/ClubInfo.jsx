import React from "react";

const ClubInfo = ({ Club }) => {
    return (
        <div className={`card text-white mb-4 ${Club.theme}`}>
            <div className="card-body">
                <h2 className={`card-title ${Club.theme}`}>Футбольний клуб: {Club.name}</h2>
                <p>Країна: {Club.country}</p>
                <p>Місто: {Club.city}</p>
                <p>Дата заснування: {Club.founded}</p>
                <p>{Club.fans}</p>
                <img src={Club.logo} alt={`Герб ${Club.name}`} className="club-logo mt-3" />
            </div>
        </div>
    );
};

export default ClubInfo;