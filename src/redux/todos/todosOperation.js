import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://6a00a74f36fb6ad04de05a5c.mockapi.io/";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos", 
  async (_, thunkAPI) => {
    try {
      const fetchData = await axios.get(`${baseUrl}/todos`);
      const data = fetchData.data
      console.log(data);
      
      return data
    } catch (err) {
       return thunkAPI.rejectWithValue(err.massage)
    }
  },
);


export const addTodos = createAsyncThunk(
  "todos/addTodos", 
  async (todoData, thunkAPI) => {
    try {
      const fetchData = await axios.post(`${baseUrl}/todos`, todoData);
      const data = fetchData.data
      console.log(data);
      
      return data
    } catch (err) {
       return thunkAPI.rejectWithValue(err.massage)
    }
  },
);


export const removeTodos = createAsyncThunk(
  "todos/removeTodos", 
  async (todoId, thunkAPI) => {
    try {
      const fetchData = await axios.delete(`${baseUrl}/todos/${todoId}`, todoId);
      const data = fetchData.data
      console.log(data);
      
      return todoId
    } catch (err) {
       return thunkAPI.rejectWithValue(err.massage)
    }
  },
);

export const changeTodo = createAsyncThunk(
    "todos/changeTodo",
    async(todoId, thunkAPI) => {
        try {
          const fetchData = await axios.put(`${baseUrl}/todos/${todoId}`, todoId);
          const data = fetchData.data
          
          return data
        } catch {
          return thunkAPI.rejectWithValue(err.massage)
        }
    }      
)


