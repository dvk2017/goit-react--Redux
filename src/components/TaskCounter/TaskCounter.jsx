import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  const tasks = useSelector((state) => state.tasks.items);

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <p className={css.text}>Active: {activeTasks.length}</p>
      <p className={css.text}>Completed: {completedTasks.length}</p>
    </div>
  );
};
