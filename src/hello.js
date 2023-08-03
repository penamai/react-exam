import React, { useState, useRef } from 'react';

export default function Hello(){
    const [name, setName] = useState('');
    const inputNameRef = useRef();

    function handleClick(){
        const newName = inputNameRef.current.value
        if(newName === '') return
        setName(newName)
        inputNameRef.current.value = null
    }

    return(
        <div className="hello">
            <div className="hello-content">
                <p className="hello-text">Enter your name: { name }</p>
                <input ref={inputNameRef} type="text" name="inputName" />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}