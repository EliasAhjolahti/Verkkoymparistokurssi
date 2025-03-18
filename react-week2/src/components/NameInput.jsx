import React from "react";

export default function NameInput({ setName }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}
