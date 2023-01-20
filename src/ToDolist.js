import { useState } from "react";
import { Button, Input }  from "antd";

const ToDoLists = (props) => {
  const [editInput, setEditInput] = useState("");
  const [addInEdit, setAddInEdit] = useState({
    show: false
  });

  const EditItem = () => {
    console.log("edit");
    setAddInEdit({ show: true });
  };
  const funEditUpdate = (event) => {
    setEditInput(event.target.value.trim());
  };
  return (
    <>
      <div className="todo_style">
        <Button
          className={props.classNameDelete}
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Remove
        </Button>
        <li className={props.className}>{props.text}</li>
        {addInEdit.show ? (
          <>
            <br />
            <Input type="text" placeholder="Edit" onChange={funEditUpdate} />
            <Button
              onClick={() => {
                props.onEdit(props.id, editInput);
                setAddInEdit({ show: false });
              }}
            >
              Edit
            </Button>
          </>
        ) : (
          <Button className={props.classNameEdit} onClick={EditItem}>
            edit
          </Button>
        )}
      </div>
    </>
  );
};

export default ToDoLists;
