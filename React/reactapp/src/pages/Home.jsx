import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { useTasks } from "../context/TaskContext";

function Home() {
 const { tasks, addTask, deleteTask } = useTasks();
 return (
 <div>
 <h1>Task Manager</h1>
 <AddTask onAdd={addTask} />
 <TaskList tasks={tasks} onDelete={deleteTask} />
 </div>
 );
}

export default Home;