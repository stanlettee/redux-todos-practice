import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { removeTodo, changeTodo } from "redux/todos/todosSlice";

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onClick={dispatch(changeTodo(task.id))}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={() => dispatch(removeTodo(task.id))} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
