import { useState, useEffect } from "react";

export default function LiveClock() {
    const [time, setTime] = useState();


    useEffect(() => {
    const interval = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
    }, 1000)


    return () => clearInterval(interval);
}, [])

    return(
      <div>  <p>{time}</p> </div>  
    )
}

