import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid"

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
    const req = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await req.json()
    return data
})

const todoSlice = createSlice({
    name: "Todo",
    initialState: {
        todos: [],
        status: ""
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                title: action.payload,
                id: uuid(),
            })
        },
        clearTodo: (state) => {
            state.todos = []
        },
        removeItem: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        completedItems: (state, action) => {
            state.todos = state.todos.filter(todo => {
                return todo.completed = !action.payload
            })
        }
    },
    extraReducers: (api) => {
        api.addCase(getTodos.pending, (state) => {
            state.status = "Pending"
        })
        api.addCase(getTodos.fulfilled, (state, action) => {
            state.status = "Successfully"
            state.todos.push(...action.payload.slice(0, 4))
        })
        api.addCase(getTodos.rejected, (state) => {
            state.todos = "Failed"
        })
    }
})

export const { addTodo, clearTodo, removeItem, completedItems } = todoSlice.actions

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})