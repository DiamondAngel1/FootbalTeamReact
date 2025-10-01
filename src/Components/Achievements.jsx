import React from "react";

const Achievements = () => {
    return (
        <div className={"card text-white mb-4"}>
            <div className={"card-body"}>
                <h2 className={"card-title"}>Досягнення</h2>
                <ul className={"list-group"}>
                    <li className={"list-group-item text-white"}>Суперкубок Бразилії - 4 титули</li>
                    <li className={"list-group-item text-white"}>Кубок Меркосур - 1 титулів</li>
                    <li className={"list-group-item text-white"}>Міжконтинентальні кубки - 1 титул</li>
                    <li className={"list-group-item text-white"}>Кубок Лібертадорес - 3 титули</li>
                    <li className={"list-group-item text-white"}>Чемпіонати Бразилії - 8 титулів</li>
                    <li className={"list-group-item text-white"}>Кубок Бразилії - 5 титулів</li>
                    <li className={"list-group-item text-white"}>Загальна кількість голів - понад 4000</li>
                </ul>
            </div>
        </div>
    );
};

export default Achievements;