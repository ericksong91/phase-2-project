import React from 'react';

function PenguinCard({ name, desc, img }) {
    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>{desc}</h2>
            <img src={img} />
        </div>
    );
}

export default PenguinCard;
