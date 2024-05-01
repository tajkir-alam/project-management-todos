import { persist } from "zustand/middleware";
const { create } = require("zustand");

const taskStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      draggedTask: null,
      fetchTask: async () => {
        try {
          const response = await fetch("/mockAPI/taskData.json");
          if (!response.ok) {
            throw new Error("Failed to fetch task data");
          }
          const tasksJson = await response.json();
          set({ tasks: tasksJson });
        } catch (error) {
          console.error("Error fetching task data:", error);
        }
      },
      addTask: (newTask) =>
        set((state) => ({
          tasks: [newTask, ...state.tasks],
        })),
      setDraggedTask: (id) => set({ draggedTask: id }),
      moveTask: (taskId, newStatus) =>
        set((store) => ({
          tasks: store.tasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task
          ),
        })),
    }),
    { name: "taskData" }
  )
);

export default taskStore;
