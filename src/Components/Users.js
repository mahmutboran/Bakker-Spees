import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import "devextreme/dist/css/dx.light.css";
import List from "devextreme-react/list";

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

  const userData = (item) => {
    // console.log(item);
    return (
      <div className="users containers">
        <div>
          <h2>{item.name}</h2>
          <ul className="listInfo">
            <li>
              <b>Email: </b>
              {item.email}
            </li>
            <li>
              <b>Phone: </b>
              {item.phone}
            </li>
            <li>
              <b>Website: </b>
              {item.website}
            </li>
            <li>
              <b>Address: </b>
              {item.address.city}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 className="header">USERS</h1>
      {/* <div className="users containers">
        {users?.map((user) => (
          <div
            className="cards"
            key={user.id}
            onClick={() => navigate(`${user.id}`)}
          >
            <h2>{user.name}</h2>
            <ul className="listInfo">
              <li>
                <b>Email: </b>
                {user.email}
              </li>
              <li>
                <b>Website: </b>
                {user.website}
              </li>
              <li>
                <b>Phone: </b> {user.phone}
              </li>
              <li>
                <b>Address: </b> {user.address.city}
              </li>
            </ul>
          </div>
        ))}
      </div> */}

      <List
        dataSource={users}
        itemRender={userData}
        onItemClick={(e) => navigate(`/${e.itemData.id}`)}
      />
    </>
  );
};

export default Users;
