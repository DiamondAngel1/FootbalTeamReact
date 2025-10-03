import React from "react";

const Squad = ({ Club }) => {
    return (
        <div className={`card ${Club.theme} text-white mb-4`}>
            <div className="card-body">
                <h2 className="card-title">Склад команди</h2>
                <ul className="list-group">
                    {Club.squad.map((player, i) => (
                        <li className={`list-group-item ${Club.theme} text-white bg-dark`} key={i}>
                            {player}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Squad;