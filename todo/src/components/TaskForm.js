// import React, { useState } from "react";

// export const TaskForm = ({ dispatch }) => {
//   const [item, setItem] = useState("");  

//   const handleChanges = e => {
//     setItem(e.target.value);
//   };
//   const submitForm = e => {
//     e.preventDefault();
//     dispatch({
//       type: "ADD_ITEM",
//       payload: item
//     });
//     setItem("");
//   };
//   const clearCompleted = e => {
//     e.preventDefault();
//     dispatch({
//       type: "CLEAR"
//     });
//   };
//   return ("")
// }