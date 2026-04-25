import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { activeTodos, completedTodos } from "redux/filter/filterSelectors";

export const TaskCounter = () => {
  const aTodos = useSelector(activeTodos)
  const cTodos = useSelector(completedTodos)
  return (
    <div>
      <p className={css.text}>Active: {aTodos.length}</p>
      <p className={css.text}>Completed: {cTodos.length}</p>
    </div>
  );
};
