import { FormEvent } from "react";

type TaskFormProps = {
  title: string;
  onTitleChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
  isSubmitting: boolean;
};

function TaskForm({ title, onTitleChange, onSubmit, isSubmitting }: TaskFormProps) {
  return (
    <form onSubmit={onSubmit} className="task-form">
      <input
        className="task-input"
        type="text"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
        placeholder="What needs to be done?"
        maxLength={120}
        aria-label="Task title"
        required
      />
      <button type="submit" className="add-btn" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
