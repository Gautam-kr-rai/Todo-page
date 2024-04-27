
import { useContext } from 'react';
import { TodoItemscontext } from '../store/todo-items-store';
import styles from './Emptymessage.module.css';
const Emptymessage = () => {

  const contextobj = useContext(TodoItemscontext)
  const todoitems = contextobj.todoItems;

  return todoitems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>

}

export default Emptymessage;