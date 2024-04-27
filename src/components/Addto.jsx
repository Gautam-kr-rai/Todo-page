import { useRef } from "react";
import { BiSolidMessageRoundedAdd } from "react-icons/bi";
function Addto({ onNewitem }) {


  const todonameelement = useRef();
  const duedateelement = useRef();


  const handleaddbuttonclicked = (event) => {

    event.preventDefault();
    const todoname = todonameelement.current.value;
    const duedate = duedateelement.current.value;
    todonameelement.current.value = "";
    duedateelement.current.value = "";
    onNewitem(todoname, duedate)



  };
  return (
    <div className="container">
      <form className="row kg-row"

        onSubmit={handleaddbuttonclicked}
      >
        <div className="col-6">
          <input
            type="text"
            ref={todonameelement}
            placeholder="Ente to do here.."

          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={duedateelement}

          />
        </div>
        <div className="col-2">
          <button
            type=" submit"
            className="btn btn-success kg-btn" ><BiSolidMessageRoundedAdd />
          </button>
        </div>
      </form>
    </div>);

}
export default Addto;