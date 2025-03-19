import React from "react";

export default function Cssprofilecard() {
    return (
      <div className="csscard">
        <img className="cssAvatar"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaG3PuUHQv9LFHhY36Jbolyv0qeS1pKXaew&s" alt="avatar" />
        <h2 className="cssHeader">Matti Meikäläinen</h2>
        <p className="cssParagraph">Full-stack developer, passionate about coding and coffee</p>
        <button className="cssButton">Contact Me</button>
        <p className="cssParagraph">Created with Vanilla CSS</p>
      </div>
    );
  }