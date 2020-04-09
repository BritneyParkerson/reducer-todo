import { task } from "../reducers/reducer";
import React from "react";

export function Task({ todo, dispatch }) {

 
 
  const taskComplete = () => {
    dispatch({
      type: "MARK_COMPLETE",
      payload: task.id
    });
  };
  return (
    <div
      onClick={taskComplete}
      className={`task${task.completed ? "completed" : ""}`}
    >
 </div>
  );
}