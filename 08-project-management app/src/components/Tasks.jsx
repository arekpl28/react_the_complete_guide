import Button from "./Button";
import NewTask from "./NewTask";

function Tasks({ onAdd, onDelete, tasks, selectedProjectId }) {
  const filteredTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {filteredTasks.length > 0 && (
        <ul className="p-4 rounded-md bg-stone-100">
          {filteredTasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <Button onClick={() => onDelete(task.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
