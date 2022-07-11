import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/form/TaskComponent";
const TaskListComponent = () => {
    const defaultTask = new Task(
        "Example",
        "Deafult description",
        false,
        LEVELS.NORMAL
    );
    const [tasks, setTasks] = useState([defaultTask]);

    // Control del ciclo de vida del componente

    useEffect(() => {
        console.log("Task State has been modified");
        return () => {
            console.log("TaskList component is going to unmount...");
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log("TODO: Cambiar estado de una tarea");
    };

    return (
        <div>
            <div>Your Task</div>
            <TaskComponent task={defaultTask} />
        </div>
    );
};
export default TaskListComponent;
