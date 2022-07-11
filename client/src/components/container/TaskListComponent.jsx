import React from "react";
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
    return (
        <div>
            <div>Your Task</div>
            <TaskComponent task={defaultTask} />
        </div>
    );
};
export default TaskListComponent;
