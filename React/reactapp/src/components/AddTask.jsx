import { useState } from "react";

function AddTask({ onAdd }) {
 const [text, setText] = useState("");
 const handleSubmit = (e) => {
 e.preventDefault();
 if (!text.trim()) return;
onAdd(text);
 setText("");
 };
 return (
 <form onSubmit={handleSubmit}>
 <input 
 value={text}
 onChange={(e) => setText(e.target.value)}
 placeholder="Add new task"
 />
 </form>
 );
}

export default AddTask;