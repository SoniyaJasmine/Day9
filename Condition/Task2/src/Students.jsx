import { Link } from "react-router-dom";

function Students() {
  return (
    <div>
      <h1>Students</h1>

      <p><Link to="/students/1">Student 1</Link></p>
      <p><Link to="/students/2">Student 2</Link></p>
      <p><Link to="/students/3">Student 3</Link></p>
    </div>
  );
}

export default Students;