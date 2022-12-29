import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
function Wrapper() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const users = await axios.get("http://localhost:8000/api/users");
      setUsers(users.data);
    }
    fetchData();
  }, []);

  console.log(users);
  return (
    <div className="row container">
      {users.map((user) => (
        <div className="col">
          <Card user={user} />
        </div>
      ))}
    </div>
  );
}

export default Wrapper;
