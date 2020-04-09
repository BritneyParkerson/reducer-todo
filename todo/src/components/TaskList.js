import React, { useReducer } from "react";
import { taskReducer, task } from "../reducers/reducer";
import { Task } from "./Tasks";
import { TaskForm } from "./TaskForm";

export const TaskList = props => {
  const [state, dispatch] = useReducer(taskReducer, task);
  console.log(state);

  return (
    <>
      <TaskForm dispatch={dispatch} />
      {state.map(todo => {
        return <Task key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
};