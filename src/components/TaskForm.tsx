import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/task.interface";

interface Props {
  newAddTask: (tas: Task) => void;
}
type handlerInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

export default function TaskForm({ newAddTask }: Props) {
  const [task, setTask] = useState(initialState);

  const handlerInputChange = ({
    target: { name, value },
  }: handlerInputChange) => {
    setTask({ ...task, [name]: value });
    // setTask({...task, [name]: value});
  };

  const handlerNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newAddTask(task);
    setTask(initialState);
  };

  return (
    <div className="card card-body bg-secondary">
      <h1>Add Task</h1>
      <form action="" onSubmit={handlerNewTask}>
        <input
          name="title"
          type="text"
          placeholder="Write a title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handlerInputChange}
          value={task.title}
        />

        <textarea
          name="description"
          id=""
          cols={30}
          rows={2}
          placeholder="Write a Description"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handlerInputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
