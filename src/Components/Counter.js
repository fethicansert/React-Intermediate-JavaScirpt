import React, { useCallback, useMemo } from 'react'
import { useState } from 'react';


let count = 0;

const Counter = () => {
    const [count, setCount] = useState([]);
    const [name, setName] = useState('');

    const sum = useMemo(() => {
        console.log("useMemo works");
        return count.reduce((cv, num) => cv + num,0);
    },[count])
    return (
        <div>
             <input value={name} onChange={(e) => setName(e.target.value)}></input>
             <button onClick={() => setCount([...count,1])}>Add 1 </button>
             <div>Sum: {sum}</div>
        </div>
    )
}

export default Counter
