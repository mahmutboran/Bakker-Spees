import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../index.css";
import { Button } from "devextreme-react/button";
import "devextreme/dist/css/dx.light.css";
import List from "devextreme-react/list";

const Todos = (item) => {
  const [todos, setTodos] = useState([]);
  const paramsId = useParams();
  console.log(paramsId);

  console.log(item);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="todos">
      <input type="text" placeholder="Add Todo" />
      <button>Add</button>

      <div>
        <List
          dataSource={todos?.filter((todo) => todo.userId == paramsId.id)}
          displayExpr="title"
        ></List>

        {/* {todos
          ?.filter((todo) => todo.userId == paramsId.id)
          .map((filteredTodo) => (
            <li>{filteredTodo.title}</li>
          ))} */}
      </div>
    </div>
  );
};

export default Todos;
