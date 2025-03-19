import React from "react"

export default function Weekdays(){
    const weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const today = new Date().getDay();

    const weekdaysOrder = [...weekdays.slice(today), ...weekdays.slice(0, today)];


    return(
        <ul>
        {weekdaysOrder.map((day, index) => (
            <li key={index}>{day}</li>
        ))}
        </ul>
    );
}
