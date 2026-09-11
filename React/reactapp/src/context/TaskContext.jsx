import { createContext, useContext, useState } from "react";

const TaskContext = createContext();
export function TaskProvider({ children }) {
 const [tasks, setTasks] = useState([]);
 const addTask = (text) => {
 setTasks([...tasks, { id: Date.now(), text }]);
 };
 const deleteTask = (id) => {
 setTasks(tasks.filter(task => task.id !== id));
};
 return (
 <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
 {children}
 </TaskContext.Provider>
 );
}

export function useTasks() {
  return useContext(TaskContext);
}
