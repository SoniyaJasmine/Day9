function Task({ task, onDelete }) {
 return (
 <div className="task">
 <h3>{task.text}</h3>
 <button onClick={() => onDelete(task.id)}>Delete</button>
 </div>
 );
}

export default Task;