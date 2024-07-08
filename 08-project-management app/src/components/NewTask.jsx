import { useState } from "react";
import Button from "./Button";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") return;
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}

export default NewTask;
