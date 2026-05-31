import React, { useState } from "react";

const App = () => {

  const [title, setTitle] = useState("")
  const [det, setDet] = useState("")
  const [task, setTask] = useState([])

  const submithandle = (e) => {
    e.preventDefault()

    const copytask = [...task]
    copytask.push({title, det})
    setTask(copytask)

    setTitle("")
    setDet("")
  }

  const del = (idx) => {
    const copytask = [...task]
    copytask.splice(idx, 1)

    setTask(copytask)
  }

  


  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-6">
          Notes App
        </h1>

        <form onSubmit={(e) => {
           submithandle(e) 
           }}
           className="bg-white p-5 rounded-2xl shadow mb-8">
          <input 
            type="text"
            placeholder="Note title..."
            className="w-full border border-slate-300 rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
              
            }}
          />

          <textarea
            placeholder="Write your note..."
            rows="5"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-400"
            value={det}
            onChange={(e) => {
              setDet(e.target.value)
            }}
          ></textarea>

          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700">
            Add Note
          </button>
        </form>

          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">
              Recent Notes
            </h1>

            <div className="grid sm:grid-cols-2 gap-5">
              {task.map((note, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-52"
                  >
                    <div>
                      <h2 className="text-xl font-bold text-slate-800 mb-2">
                        {note.title}
                      </h2>

                      <p className="text-slate-600 line-clamp-4">
                        {note.det}
                      </p>
                    </div>

                    <button
                      onClick={() => del(idx)}
                      className="mt-4 bg-red-500 text-white py-2 rounded-xl font-semibold hover:bg-red-600 active:scale-95 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </div>
  );
};

export default App;