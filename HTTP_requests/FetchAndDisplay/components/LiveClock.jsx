import { useState, useEffect } from "react";

export default function LiveClock() {
    const [time, setTime] = useState();


    useEffect(() => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
}, [])

    return(
      <div>  <p>{time}</p> </div>  
    )
}

