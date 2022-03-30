import React, { useState } from "react";
//import React from "react";
import {TASKS} from "../data";
//import Task from "./Task.js";



const TaskList = () =>  {
  const task = {TASKS}
  const [tasks, setTasks] = useState([{text: "Brush teeth"}, {text: "Wash the car"}])
  console.log(tasks)
  //const tasker = tasks.map(task) => <li {task.text}></li>;
  const tasker = tasks.map(task => {
    return (
      <li>{task.text}</li>)
    })
    console.log(tasker)

    return  (
      <div className="tasks"> 
        {tasker} 
      </div>
     
  );
}


export default TaskList;


