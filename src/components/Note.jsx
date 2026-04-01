import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="relative bg-gray-800 rounded-xl shadow-2xl p-6 w-64 m-4 float-left transform hover:-rotate-1 hover:scale-105 transition-all border-l-4 border-gray-700">
      <h1 className="text-xl font-extrabold mb-5 text-white tracking-tight drop-shadow-md">
        {props.title}
      </h1>
      <p className="text-base mb-4 text-gray-200 whitespace-pre-wrap">{props.content}</p>
      <button
        onClick={handleClick}
        className="absolute top-2 right-2 bg-gray-700 text-white rounded-full w-10 h-10 font-bold shadow-md hover:rotate-12 hover:scale-110 transition-transform"
      >
        ✕
      </button>
      <div className="absolute top-1 left-1 w-2 h-2 bg-gray-600 rounded-full opacity-50"></div>
      <div className="absolute bottom-2 right-3 w-2 h-2 bg-gray-600 rounded-full opacity-50"></div>
    </div>
  );
}

export default Note;
