import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div className="relative max-w-lg mx-auto mt-10 mb-10">
      <form className="relative bg-gray-900 p-6 rounded-xl shadow-2xl border-l-4 border-gray-700 transform hover:scale-105 transition-transform">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          className="w-full border-none p-2 text-xl font-extrabold placeholder-gray-500 outline-none mb-4 bg-transparent text-white"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note"
          rows="4"
          className="w-full border-none p-2 text-lg font-semibold placeholder-gray-500 outline-none mb-4 resize-none bg-transparent text-white"
        />
        <button
          onClick={submitNote}
          className="absolute right-4 -bottom-6 bg-gray-700 text-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center text-xl font-bold hover:scale-110 transition-transform"
        >
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
