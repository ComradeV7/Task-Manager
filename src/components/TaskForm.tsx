import { useState } from "react";

type TaskFormProps = {
  onAddTask: (text: string) => void;
};

export const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [inputText, setInputText] = useState("");

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    onAddTask(inputText);
    setInputText("");
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit" id="add-task-btn">Add Task</button>
    </form>
  );
};
