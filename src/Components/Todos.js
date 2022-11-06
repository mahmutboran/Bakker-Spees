import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../index.css";
import { Button } from "devextreme-react/button";
import "devextreme/dist/css/dx.light.css";
import List from "devextreme-react/list";
import { Item } from "devextreme-react/context-menu";

const Todos = (item) => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState("");
  const paramsId = useParams();

  const getData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
    console.log(todos);
  };

  useEffect(() => {
    getData();
  }, []);

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(removeItem);
  }

  const handleCompletedClick = (id) => {
    todos.map(async (item) => {
      // console.log(item);
      if (item.id === id) {
        try {
          const resp = await axios({
            method: "put",
            url: `https://jsonplaceholder.typicode.com/todos/${id}`,
            data: {
              // title: `${item.title}`,
              title: "Merhaba",
              userId: `${item.userId}`,
              id: `${item.id}`,
              completed: `${!item.completed}`,
            },
          });
          // setCompleted(resp.data.completed);
          console.log(resp.data);
          getData();
        } catch (error) {
          console.log(error);
        }
      } else {
        return setCompleted(item.completed);
      }
    });
  };

  return (
    <div className="todos">
      <h1>TASK LIST 2022</h1>
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="What do you have planned?"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="input-group-text btn btn-primary"
            id="basic-addon2"
          >
            <b>Add Task</b>
          </button>
        </div>
      </div>

      <div>
        <h1>Tasks</h1>
        {/* <List
          dataSource={todos?.filter((todo) => todo.userId == paramsId.id)}
          displayExpr="title"
        ></List> */}

        {todos
          ?.filter((todo) => todo.userId == paramsId.id)
          .map((filteredTodo) => {
            // console.log(filteredTodo);
            return (
              <div class="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={filteredTodo.title}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="input-group-text btn btn-primary"
                    id="basic-addon2"
                    onClick={() => handleDeleteClick(filteredTodo.id)}
                  >
                    <b>Delete </b>
                  </button>
                  <button
                    className="input-group-text btn btn-primary"
                    id="basic-addon2"
                    onClick={() => handleCompletedClick(filteredTodo.id)}
                  >
                    <b>
                      {filteredTodo.completed ? (
                        <i class="dx-icon-check"></i>
                      ) : (
                        <i class="dx-icon-close"></i>
                      )}
                    </b>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todos;
