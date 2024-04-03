import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid"

const todoSlice = createSlice({
    name: "Todo",
    initialState: {
        todos: []
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
    }
})

export const { addTodo, clearTodo, removeItem, completedItems } = todoSlice.actions

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})