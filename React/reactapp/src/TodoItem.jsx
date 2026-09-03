import { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const saveEdit = () => {
    if (text.trim() === '') return;
    editTodo(todo.id, text);
    setEditing(false);
  };

    return (
        <div className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {editing ? (
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            ) : (
                <span className={todo.completed ? 'completed' : ''}>
                    {todo.text}
                </span>
            )}
            {editing ? (
                <button onClick={saveEdit}>Save</button>
            ) : (
                <button onClick={() => setEditing(true)}>Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;