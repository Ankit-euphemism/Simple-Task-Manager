import { Task } from "../types/task";

type TaskItemProps = {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: number) => void;
};

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-main">
        <button
          type="button"
          className={`toggle-btn ${task.completed ? "done" : "pending"}`}
          onClick={() => onToggle(task)}
          aria-label={task.completed ? "Mark task as pending" : "Mark task as completed"}
        >
          {task.completed ? "Done" : "Mark done"}
        </button>
        <span className="task-title">{task.title}</span>
      </div>

      <button type="button" className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
