import React from "react";

const Squad = () => {
    const players = [
        "Воротар - Agustín Rossi",
        "Захисники - Leonardo Pereira, Cleiton Santana dos Santos, Leonardo Rech Ortiz, Danilo Luiz da Silva",
        "Півзахисники - Erick Antonio Pulgar Farfán, Evertton Gustavo Fernandes Araújo, Allan Rodrigues de Souza, Jorge Luiz Frello Filho",
        "Атакуючі півзахисники - Diego Nicolás de la Cruz Arcosa, Giorgian Daniel De Arrascaeta Benedetti, Jorge Carrascal, Saúl Ñíguez Esclápez",
        "Нападники - Samuel Dias Lino, Gonzalo Plata, Wallace Yan, Everton Sousa Soares, Olávio Vieira dos Santos Júnior"
    ];

    return (
        <div className={"card text-white mb-4"}>
            <div className={"card-body"}>
                <h2 className={"card-title"}>Склад команди</h2>
                <ul className={"list-group"}>
                    {players.map((player, i) => (
                        <li className={"list-group-item text-white"} key={i}>{player}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Squad;