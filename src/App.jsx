import AppName from "./components/AppName"
import Addto from "./components/Addto"
import "./App.css"
import TodoItems from "./components/TodoItems"
import { useState } from "react";
import Emptymessage from "./components/Emptymessage";
import { TodoItemscontext } from "./store/todo-items-store";
function App() {


  const [todoItems, settoditems] = useState([]);

  const addnewitem = (itemname, itemduedate) => {
    // settoditems((currvalue)=>{

    //   const newtodoitems = [...currvalue, { name: itemname, duedate: itemduedate }];
    //   return newtodoitems;
    // });
    settoditems((currvalue) =>

      [...currvalue, { name: itemname, duedate: itemduedate }]

    );


  }

  const Deleteitem = (todoItemname) => {
    const newTodoitems = todoItems.filter(item => item.name != todoItemname)
    settoditems(newTodoitems);
    // console.log(`item deleted ${todoItemname}`)
  }



  return (
    <TodoItemscontext.Provider value={{
      todoItems: todoItems,
      addnewitem: addnewitem,
      Deleteitem: Deleteitem,
    }}>

      <center className="todo-container">
        <AppName></AppName>
        <Addto onNewitem={addnewitem}></Addto>
        <Emptymessage ></Emptymessage>
        <TodoItems  ></TodoItems>
      </center>
    </TodoItemscontext.Provider>
  )
}

export default App
