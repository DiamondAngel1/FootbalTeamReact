import React from "react";

const Achievements = ({ Club }) => {
    return (
        <div className={`card text-white mb-4 ${Club.theme}`}>
            <div className="card-body">
                <h2 className="card-title">Досягнення</h2>
                <ul className="list-group">
                    {Club.achievements.map((item, i) => (
                        <li className={`list-group-item ${Club.theme} text-white bg-dark`} key={i}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Achievements;