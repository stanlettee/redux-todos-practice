import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { fetchTodos, addTodos, removeTodos, changeTodo } from "./todosOperation";

// const initialState = [{ id: 1, completed: false, text: "qwe" }];

const initialState = {
  loading: false,
  error: null,
  todos: [],
};


const todosSlice = createSlice({
  name: "todos",

  initialState,

 extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    

    builder.addCase(addTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    });
    builder.addCase(addTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(removeTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      console.log(action.payload)
    });
    builder.addCase(removeTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(changeTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
      console.log(action.payload)
    });
    builder.addCase(changeTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const todosReducer = todosSlice.reducer;
