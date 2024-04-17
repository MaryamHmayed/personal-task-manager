import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  initialState: {
    tasks: [],
    count: 0,
    done: 0,
    left: 0,
  },
  name: "tasks",
  reducers: {
    loadTasks: (state, action) => {
      const { payload } = action;

      state.tasks = payload.tasks;
    },

    loadTasksAnalytics: (state, action) => {
      const { tasks } = state;

      state.count = tasks.length;
      const statuses = {
        done: 0,
        left: 0,
      };

      tasks.forEach((task) => {
        if (task.status) {
          statuses.done++;
        } else {
          statuses.left++;
        }
      });

      state.done = statuses.done;
      state.left = statuses.left;
    },
  },
});

export default taskSlice.reducer;

export const { loadTasks, loadTasksAnalytics } = taskSlice.actions;
