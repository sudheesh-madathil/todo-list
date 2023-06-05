import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function Todo() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    document.title=`You have ${tasks.length} pending task(s)`
  })
  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };
  const removeTask = (Index) => {
    const newTask = [...tasks];
    newTask.splice(Index, 1);
    setTasks(newTask);
  };

  return (
    <>
      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task, Index) => (
            <ListTask
              Props={task}
              removeTask={removeTask}
              index={Index}
              key={Index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export { Todo };
