import { useState } from "react";


export default function NameInput() {
    const [name, setName] = useState('');

    return(
    <input type="text" className="nameInput" onChange={() => setName({name})}></input>
    
    )
}