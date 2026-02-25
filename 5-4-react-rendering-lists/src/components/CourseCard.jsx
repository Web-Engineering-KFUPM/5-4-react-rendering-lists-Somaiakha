// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  /* =========================================================
     TASK 4 — Interactivity (Toggle + Delete ONLY)
     ---------------------------------------------------------
     1) Implement toggleTask(id) using onMutateCourse + .map()
     2) Implement deleteTask(id) using onMutateCourse + .filter()
     ========================================================= */

  function toggleTask(id) {
    onMutateCourse(index, (tasks) =>
      tasks.map((task) =>
        task.id === id
          ? { ...task, isDone: !task.isDone }
          : task
      )
    );
  }

  function deleteTask(id) {
    onMutateCourse(index, (tasks) =>
      tasks.filter((task) => task.id !== id)
    );
  }

  // Helpful hints for TASK 3 (optional to use)
  const hasTasks = course.tasks.length > 0;
  const allDone = hasTasks && course.tasks.every(t => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

        {allDone && (
          <span className="badge success">
            All caught up
          </span>
        )}

      </header>

      <section className="tasksSection">

        {course.tasks.length === 0 && (
          <p className="muted">No tasks yet.</p>
        )}

        <ul >
          {course.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </article>
  );
  
}