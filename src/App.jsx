import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";
import NotFound from "./pages/NotFound";
import TaskForm from "./pages/TaskForm";
import TaskPage from "./pages/TaskPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="https://mern-stack-reactapp.herokuapp.com/" element={<TaskPage />} />
            <Route path="https://mern-stack-reactapp.herokuapp.com/new" element={<TaskForm />} />
            <Route path="https://mern-stack-reactapp.herokuapp.com/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
