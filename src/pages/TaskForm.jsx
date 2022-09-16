import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="mx-auto  pt-20">
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            className="bg-slate-300 max-w-sm rounded-md p-4 mt-10 mx-auto"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Task" : "Create New Task"}
            </h1>
            <label className="block">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
              className="px-2 py-1 rounded-md block w-full"
            />

            <label>Description</label>
            <textarea
              className="px-2 py-1 rounded-md block w-full"
              name="description"
              placeholder="Write description"
              rows="3"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
