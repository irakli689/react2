import { useState, useEffect } from "react";
import Button from "./Button";

export default function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect ( () => {

        let indervalID = setInterval(() => {
            setCount(current=>current+1);
            console.log('count');
        }, 1000);
        return ()=>clearInterval(indervalID); //es ari unmount, hide counter ghilakze app.js-dan dacheris dros rerenderi xdeba mag dros return brundeba
    }, [] );

    return (
        <div className="app">
            current {count}
            <Button title='update state' onClick={()=>setCount(current=>current+1)}/>
        </div>
    )
}