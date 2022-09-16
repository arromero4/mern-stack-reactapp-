import React from "react";
import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="flex-auto flex-wrap bg-zinc-600 text-white rounded-md p-4 ">
      <header className="flex justify-between gap-x-2">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>

      <span>{task.createAt}</span>
      <div className="flex nowrap gap-x-2">
        <button
          className="bg-red-500 px-1 py-1 text-white rounded-md lg:py-2"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-400 px-2 py-1 text-white rounded-md"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-green-500 px-2 py-1 text-white rounded-md"
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
