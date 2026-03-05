import TaskItem from "./TaskItem";
import { Task } from "../types/task";

type TaskListProps = {
  tasks: Task[];
  onToggle: (task: Task) => void;
  onDelete: (id: number) => void;
};

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <section className="empty-state" aria-live="polite">
        <h2>No tasks yet</h2>
        <p>Add your first task above to start organizing your day.</p>
      </section>
    );
  }

  return (
    <ul id="taskList" className="task-list" aria-label="Task items">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
