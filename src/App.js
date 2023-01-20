import { useState } from "react";
import "./styles.css";
import ToDoLists from "./ToDolist";
import EnterItem from "./InputItem";
import { Button, Input }  from "antd";

export default function App() {
  const [item, setItem] = useState("");
  const [itemArr, setItemArr] = useState([]);

  const itemValue = (event) => {
    setItem(event.target.value.trim());
  };

  const ChangeValue = () => {
    if (item !== "") {
      setItemArr([...itemArr, item]);
      setItem("");
    }
  };

  const deletitem = (id) => {
    console.log("delete");
    setItemArr((preValu) => {
      return preValu.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  const updateItem = (id, editValue) => {
    // console.log(id);
    // console.log(editValue);
    if (editValue !== "") {
      setItemArr((preValu) => {
        preValu[id] = editValue;
        return [...preValu];
      });
    }
  };

  return (
    <>
      <div id="main">
        <div className="center_div">
          <br />
          <h1>IOL ToDolist</h1>
          <br />
          <EnterItem
            id="task"
            type="text"
            placeholder="Add a Item"
            value={item}
            onChange={itemValue}
          />
          <Button id="btn" onClick={ChangeValue}>
            Add
          </Button>
          <ol>
            {itemArr.map((itemCur, index) => {
              return (
                <ToDoLists
                  className="list"
                  classNameDelete="delete"
                  classNameEdit="edit"
                  key={index}
                  id={index}
                  text={itemCur}
                  onSelect={deletitem}
                  onEdit={updateItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
      ;
    </>
  );
}
