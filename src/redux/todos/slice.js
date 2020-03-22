import { createSlice } from '@reduxjs/toolkit';

export const { actions, reducer } = createSlice({
  name: 'Todo',
  initialState: {
    list: []
  },
  reducers: {
    add: (state, { payload }) => {
      state.list.push(payload);
    },
    remove: (state, { payload }) => {
      state.list = state.list.filter(todo => todo.id !== payload);
    },
    removeAll: state => {
      state.list = [];
    }
  }
});

export default reducer;
