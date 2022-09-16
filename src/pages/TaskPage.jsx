import React from "react";
import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TaskPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No tasks yet!</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center py-20">Tasks</h1>
      <div className="grid lg:grid-cols-3 gap-2 sm:grid-cols-1">{renderMain()}</div>
    </div>
  );
}

export default TaskPage;
