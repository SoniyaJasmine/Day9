function TaskList({ tasks, onDelete }) {
 return (
 <div>
 {tasks.length === 0 ? (
 <p>No tasks yet. Add one!</p>
 ) : (
 tasks.map((task) => (
 <Task key={task.id} task={task} onDelete={onDelete} />
 ))
 )}
 </div>
 );
}

export default TaskList;