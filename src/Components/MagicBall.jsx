import React, { useState } from "react";


const MagicBall = () => {
    const [answer, setAnswer] = useState("Задай питання...");

    const answers = [
        "Безперечно",
        "Звісно",
        "Без сумнівів",
        "Точно так",
        "Можеш бути в цьому впевнений",
        "Мені здається - так",
        "Скоріше за все",
        "Хороші перспективи",
        "Наразі не зрозуміло, спробуй ще раз",
        "Запитай пізніше",
        "Краще не розказувати",
        "Наразі не можна передбачити",
        "Сконцентруйся і запитай знову",
        "Навіть не думай",
        "Моя відповідь - ні",
        "Перспективи не дуже хороші",
        "Досить сумнівно"
    ];

    const shakeBall = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        setAnswer(answers[randomIndex]);
    };

    return (
        <div className="magic-ball-container">
            <h1 className="title">Магічна куля передбачень</h1>
            <div className="ball" onClick={shakeBall}>
                <div className="answer">{answer}</div>
            </div>
            <p className="hint">Клікни на кулю щоб отримати передбачення</p>
        </div>
    );
};

export default MagicBall;