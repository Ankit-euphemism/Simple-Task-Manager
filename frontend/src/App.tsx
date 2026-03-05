import { FormEvent, useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { createTask, fetchTasks, removeTask, updateTask } from "./services/taskApi";
import { Task } from "./types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadTasks = async (): Promise<void> => {
    try {
      setError(null);
      const data = await fetchTasks();
      setTasks(data);
    } catch {
      setError("Unable to load tasks. Make sure backend runs on port 5000.");
    }
  };

  useEffect(() => {
    void loadTasks();
  }, []);

  const addTask = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    try {
      setIsSubmitting(true);
      await createTask(trimmedTitle);
      setTitle("");
      await loadTasks();
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleComplete = async (task: Task): Promise<void> => {
    const updatedTask: Task = { ...task, completed: !task.completed };

    await updateTask(updatedTask);

    void loadTasks();
  };

  const deleteTask = async (id: number): Promise<void> => {
    await removeTask(id);
    void loadTasks();
  };

  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const remainingCount = totalCount - completedCount;

  return (
    <main className="page">
      <section className="panel">
        <header className="panel-header">
          <p className="kicker">✳️ Tasks Stage</p>
          <h1>Plan your day, finish on time.</h1>
          <p className="subtitle">Track what matters with a clear and focused workflow.</p>
        </header>

        <TaskForm
          title={title}
          onTitleChange={setTitle}
          onSubmit={addTask}
          isSubmitting={isSubmitting}
        />

        <section className="stats" aria-label="Task summary">
          <div className="stat-card">
            <span className="stat-label">Total</span>
            <strong>{totalCount}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Pending</span>
            <strong>{remainingCount}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Completed</span>
            <strong>{completedCount}</strong>
          </div>
        </section>

        {error ? <p className="error-text">{error}</p> : null}

        <TaskList
          tasks={tasks}
          onToggle={(task) => {
            void toggleComplete(task);
          }}
          onDelete={(id) => {
            void deleteTask(id);
          }}
        />
      </section>
    </main>
  );
}

export default App;
