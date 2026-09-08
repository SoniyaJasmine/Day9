import { useRef } from "react";

function Uncontrolled() {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        console.log("Username: ", username);
        console.log("Password: ", password)
    };

    return (
        <div>
            <h2>Login Form</h2>
            <form action="" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="">Username:</label>
                    <input type="text" name="" id="" ref={usernameRef} placeholder="Enter username"/>
                </div>

                <br />

                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" name="" id="" ref={passwordRef} placeholder="Enter password" />
                </div>
                
                <br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Uncontrolled;