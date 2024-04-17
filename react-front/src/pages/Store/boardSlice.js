import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [],
  loading: false,
  error: null,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    fetchBoardsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBoardsSuccess(state, action) {
      state.loading = false;
      state.boards = action.payload;
    },
    fetchBoardsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addBoard(state, action) {
      state.boards.push(action.payload);
    },
    deleteBoard(state, action) {
      state.boards = state.boards.filter(board => board.id !== action.payload);
    },
  },
});

export const { fetchBoardsRequest, fetchBoardsSuccess, fetchBoardsFailure, addBoard, deleteBoard } = boardSlice.actions;

export default boardSlice.reducer;