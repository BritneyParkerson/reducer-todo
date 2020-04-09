import React, { useReducer, useState } from "react";

export const task = [
    {
    item: 'Watch The Originals Series',
    completed: false,
    id: 3892987589
    },

    {
    item: 'Bathe All Dogs',
    completed: false,
    id: 3892987590
    },

    {
    item: 'Strategize Grocery Shopping',
    completed: false,
    id: 3892987591
    },

    {
    item: 'Work From Home/Train Learners',
    completed: false,
    id: 3892987592
    },

    {
    item: 'Attend Lambda School',
    completed: false,
    id: 3892987593
    },

    {
    item: 'Spring Cleaning',
    completed: false,
    id: 3892987594
    },

     {
    item: 'Yard Work',
    completed: false,
    id: 3892987595
    }

]

export function taskReducer(state, action) {
	switch(action.type) {

		case "ADD_TASK":
			return [
                ...state,
                { item: action.payload, completed: false, id: Date.now() }
              ];

		case "MARK_COMPLETE":
			return state.map(todo => {
                if (todo.id === action.payload) {
                  return { ...todo, completed: !todo.completed };
                }
                return task;
            });

		case "CLEAR" : 
        return state.filter(task => !task.completed);
        default:
          return state;

	}

};