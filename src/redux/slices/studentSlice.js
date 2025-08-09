import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    },
    deleteStudent: (state, action) => {
      return state.filter((student) => student.id !== action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addStudent, deleteStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;