import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import Checkbox from "@mui/material/Checkbox";
import "./todoPage.style.css";
import { UserContext } from "../../App";

const TodoPage = () => {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);
  const { setIsAuthenticated } = useContext(UserContext);

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo !== "") {
      setTodoList([...todoList, { text: todo }]);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    const newTodo = [...todo];
    setTodoList(todoList.filter((el, i) => index !== i));
  };

  const toggleTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="todo">
      <Typography variant="h5"> Todo Page</Typography>
      <div className="input-box">
        <TextField
          id="inputBx"
          label="Add todo"
          variant="standard"
          value={todo}
          name="todo"
          onChange={onChangeHandler}
        />
        <Button onClick={addTodo} variant="outlined" color="primary">
          <AddIcon />
        </Button>
      </div>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {todoList.map((item, index) => (
          <ListItem
            key={index}
            sx={{ justifyContent: "space-between", gap: "100px" }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.completed}
                  onChange={() => toggleTodo(index)}
                />
              }
              label={
                <ListItemText
                  primary={item.text}
                  sx={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                />
              }
            />
            <Button onClick={() => deleteTodo(index)}>
              <DeleteForeverTwoToneIcon />
            </Button>
          </ListItem>
        ))}
      </List>
      <Button onClick={logout} variant="outlined" color="primary">
        Logout
      </Button>
    </div>
  );
};

export default TodoPage;
