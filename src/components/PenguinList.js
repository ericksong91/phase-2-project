import React, { useState, useEffect } from 'react';
import PenguinCard from './PenguinCard';

function PenguinList() {
    const [penguins, setPenguins] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/penguins")
            .then((r) => r.json())
            .then((data) => setPenguins(data))
    }, [])

    const penguinList = penguins.map((pen) => {
        return <PenguinCard key={pen.id} name={pen.name} desc={pen.desc} img={pen.image} />
    })

    console.log(penguinList)

    return (
        <div>
            <h1>Here are the Penguins:</h1>
            {penguinList}
        </div>
    );
}

export default PenguinList;