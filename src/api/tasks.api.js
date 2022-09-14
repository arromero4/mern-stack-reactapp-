import axios  from "axios";

export const getTasksRequest = async () =>
  await axios.get("https://mern-stack-reactapp.herokuapp.com/tasks")


export const createTaskRequest = async (task) =>
  await axios.post("https://mern-stack-reactapp.herokuapp.com/tasks", task);


export const deleteTaskRequest = async (id) => {
  await axios.delete(`https://mern-stack-reactapp.herokuapp.com/tasks/${id}`);
}

export const getTaskRequest = async (id) =>
  await axios.get(`https://mern-stack-reactapp.herokuapp.com/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`https://mern-stack-reactapp.herokuapp.com/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`https://mern-stack-reactapp.herokuapp.com/tasks/${id}`, {
    done,
  });