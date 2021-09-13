import React from "react";

const createNumber = () => {
    const number = [];
    for (let i = 1; i < 10; i++) {
        number.push(
            <button key={i}>{i}</button>
        )
    }
    return number;
}

function AmazingNumberButton() {
    return (
        <div className="operation">
            { createNumber() }
            <button>0</button>
        </div>
    )
}

export default AmazingNumberButton;
