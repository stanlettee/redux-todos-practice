import { Task } from "components/Task/Task";
import { useSelector } from "react-redux";
import { getTasks } from "redux/todos/todosSelectors";
import css from "./TaskList.module.css";

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
