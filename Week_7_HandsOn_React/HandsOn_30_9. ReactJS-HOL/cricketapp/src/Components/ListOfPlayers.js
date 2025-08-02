import React from 'react';

function ListOfPlayers() {
    const players = [
        { name: "Virat Kohli", score: 85 },
        { name: "Rohit Sharma", score: 45 },
        { name: "KL Rahul", score: 72 },
        { name: "Shikhar Dhawan", score: 60 },
        { name: "Rishabh Pant", score: 90 },
        { name: "Hardik Pandya", score: 66 },
        { name: "MS Dhoni", score: 99 },
        { name: "Ravindra Jadeja", score: 40 },
        { name: "Jasprit Bumrah", score: 30 },
        { name: "Yuzvendra Chahal", score: 55 },
        { name: "Bhuvneshwar Kumar", score: 75 }
    ];


    const filteredPlayers = players.filter(player => player.score >= 70);


    return (
        <div>
            <h1>List of Players</h1>
            <ul>
                {players.map((p, index) => (
                    <li key={index}>
                        {p.name}
                    </li>
                ))}
            </ul>
            <hr/>
            <h1>List of Players having Score Less than 70</h1>
            <ul>
                {filteredPlayers.map((fp, index) => (
                    <li key={index}>
                        {fp.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListOfPlayers;