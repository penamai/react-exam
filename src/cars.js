import React from 'react';

export default function Cars(){
    const carArray = ["Ford", "BMW", "Audi"];

    return(
        <div className="cars">
            <h1>Who lives in my garage?</h1>
            <ul>
                {carArray.map((car) => {return <li>I am a { car }</li>})}
            </ul>
        </div>
    )
}