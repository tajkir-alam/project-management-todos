const { create } = require("zustand");

const taskStore = create((set, get) => ({
  tasks: [],
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
}));

export default taskStore;
