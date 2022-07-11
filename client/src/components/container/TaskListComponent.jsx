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

    const defaultTask1 = new Task(
        "Example1",
        "Description1",
        true,
        LEVELS.NORMAL
    );
    const defaultTask2 = new Task(
        "Example2",
        "Description 2",
        false,
        LEVELS.URGENT
    );
    const defaultTask3 = new Task(
        "Example3",
        "Description 3",
        false,
        LEVELS.BLOCKING
    );

    const [tasks, setTasks] = useState([
        defaultTask1,
        defaultTask2,
        defaultTask3,
    ]);

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
            <div className="col-12">
                <div className="card">
                    <div className="card-header p-3">
                        <h5>Your Task</h5>
                    </div>
                    <div
                        className="card-body"
                        /* para que nos haga un scroll si es que se pasa de las 4 tareas */
                        data-mdb-perfect-scrollbar="true"
                        style={{ position: "relative", height: "400px" }}
                    >
                        <table>
                            {/* table head ya que sino va a ser una fila de excel xd */}
                            <thead>
                                {/* table row */}
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => (
                                    <TaskComponent key={index} task={task} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TaskListComponent;
