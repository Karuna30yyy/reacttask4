import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        console.log(data);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>User Table</h1>
      {users.length > 0 ? <TableComponent data={users} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
