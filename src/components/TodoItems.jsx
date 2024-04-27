import { useContext } from "react";
import { TodoItemscontext } from "../store/todo-items-store";
import Todoitem from "./Todoitem";
import styles from './TodoItems.module.css';

const TodoItems = () => {
  //  const contextobj = useContext(TodoItemscontext)
  //   const todoitems = contextobj.todoItems;

  const { todoItems, Deleteitem } = useContext(TodoItemscontext);



  return (<>


    <div className={styles.itemcontainer}>
      {todoItems.map(item => <Todoitem key={item.name}
        todoName={item.name}
        todoDate={item.duedate}

      ></Todoitem>)}

    </div>
  </>);
}

export default TodoItems;