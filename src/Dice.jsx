import React, { useState } from "react";

export default function DiceRoll() {
    const [diceValue, setDiceValue] = useState(1);
    const [rotation, setRotation] = useState(0);

    const randomValue = () => {        
        setRotation(rotation + 720);
        setTimeout(() =>{ 
            const newDiceValue = Math.floor(Math.random() * 6) + 1;
            setDiceValue(newDiceValue);
        }, 700)
    };

    const style = {
        transition: '1.2s',
        transform: `rotateY(${rotation}deg)`,
        // transform: `rotateX(${rotation}deg)`,
        // transform: `rotateZ(${rotation}deg)`,
        perspective: '1000px',
        transformStyle:'preserve-3d',
        cursor: 'pointer'
        
    };

    return (
        <div>
            <p style={style} onClick={randomValue}>
                {(() => {
                    switch (diceValue) {
                        case 1:
                            return <i className="fa-solid fa-dice-one"></i>;
                        case 2:
                            return <i className="fa-solid fa-dice-two"></i>;
                        case 3:
                            return <i className="fa-solid fa-dice-three"></i>;
                        case 4:
                            return <i className="fa-solid fa-dice-four"></i>;
                        case 5:
                            return <i className="fa-solid fa-dice-five"></i>;
                        case 6:
                            return <i className="fa-solid fa-dice-six"></i>;
                        default:
                            return null;
                    }
                })()}
            </p>
        </div>
    );
}
