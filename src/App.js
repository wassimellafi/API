import "./App.css";
import { useState, useEffect } from "react";
import Users from "./components/users/Users";
function App() {
    const [User, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((response) => setUsers(response))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="App">
            <Users User={User} />
        </div>
    );
}

export default App;
