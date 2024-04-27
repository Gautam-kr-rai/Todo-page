
import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemscontext } from "../store/todo-items-store";
function Todoitem({ todoName, todoDate, onDeleteclick }) {

  const { Deleteitem } = useContext(TodoItemscontext)
  return (
    <div className="container">
      <div className="row kg-row">

        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-btn" onClick={() => Deleteitem(todoName)}><MdDeleteForever /></button>
        </div>
      </div>
    </div>);
}
export default Todoitem;