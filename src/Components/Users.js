import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import "devextreme/dist/css/dx.light.css";
import List from "devextreme-react/list";
import Todos from "./Todos";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  console.log(users);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="users">
      <h1>USERS</h1>
      {/* {users?.map((user) => (
        <div key={user.id}>
          <h1 onClick={() => navigate(`${user.id}`)}>{user.name}</h1>
        </div>
      ))} */}

      <List
        dataSource={users}
        displayExpr="name"
        onItemClick={(e) => navigate(`/${e.itemData.id}`)}
      />
    </div>
  );
};

export default Users;
