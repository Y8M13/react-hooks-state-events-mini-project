import React from "react";
import { TASKS } from "../data";
//import Task from "./Task.js";

//const tasks = {TASKS}



const TaskList = () =>  {
  let tasks = [TASKS];
  console.log(tasks)

  return  (
    <div className="tasks"> 
      <h1>Where are the tasks?</h1> 
      <p>
        tasks
      </p>
      
    {/* display a list of tasks using Task component */}  
   </div>
  );
}


export default TaskList;
