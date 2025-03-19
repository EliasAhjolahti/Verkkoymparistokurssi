import React from "react";

export default function TailwindProfilecard() {
  return (
    <div className="card bg-gray-300 border border-white rounded-lg p-5 w-72 ml-0 shadow-lg hover:bg-gray-200">
      <img 
        className="avatar w-24 h-24 mx-auto rounded-full object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaG3PuUHQv9LFHhY36Jbolyv0qeS1pKXaew&s" 
        alt="avatar" 
      />
      <h2 className="text-xl font-bold text-center mt-4">Matti Meikäläinen</h2>
      <p className="text-sm text-center text-gray-600">Full-stack developer, passionate about coding and coffee</p>
      <button className=" w-60 button bg-blue-500 text-white py-2 px-4 rounded-md mt-4 mx-auto block hover:bg-blue-600 cursor-pointer">
        Contact Me
      </button>
      <p className="text-sm text-center text-gray-600" >Created with TailwindCSS</p>
    </div>
  );
}
