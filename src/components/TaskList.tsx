import React from "react";
import { Task } from "../interfaces/task.interface";
import TaskCard from "./TaskCard";
interface Props {
  task: Task[];
  deleteTask: (id: number) => void;
}

export default function TaskList({ task, deleteTask }: Props) {
  return (
    <>
      {task.map((task) => (
        <div className="col-md-4 pb-2" key={task.id}>
          <TaskCard task={task} deleteTask={deleteTask} />
        </div>
      ))}
    </>
  );
}
