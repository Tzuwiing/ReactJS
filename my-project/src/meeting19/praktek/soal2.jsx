import { create } from "zustand";
import { useState } from "react";

const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text: task }],
    })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
}));

const ToDoApp = () => {
  const { tasks, addTask, removeTask } = useTaskStore();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Tambahkan tugas..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="px-3 py-2 rounded-md border-none text-black w-64"
        />
        <button
          onClick={handleAddTask}
          className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Tambah
        </button>
      </div>

      <ul className="w-80">
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-center">Belum ada tugas</p>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-800 p-3 rounded-md mb-2"
            >
              {task.text}
              <button
                onClick={() => removeTask(task.id)}
                className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Hapus
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ToDoApp;
