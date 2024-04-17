import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  initialState: {
    boards: [],
    currentSelected: null,
  },
  name: "boards",
  reducers: {
    loadBoards: (state, action) => {
      const { payload } = action;

      state.boards = payload.map((board) => {
        const { id, name } = board;

        return {
          id,
          name,
        };
      });
    },

    selectboard: (state, action) => {
      const { payload } = action;

      const selected = state.boards.find((board) => board.id === payload.id);

      state.currentSelected = selected;
    },
  },
});

export default boardSlice.reducer;

export const { loadBoards, selectboard } = boardSlice.actions;