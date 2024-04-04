import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo, clearTodo, getTodos, removeItem } from "../store/store"

function TodoForm() {

    const [todo, setTodo] = useState("")

    const dispatch = useDispatch()

    const changeHandler = e => {
        const { value } = e.target
        setTodo(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (todo.trim() !== "") {
            dispatch(addTodo(todo))
            setTodo("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={todo}
                onChange={changeHandler}
                type="text"
                placeholder="Write something "
                className=" form-control "
            />
            <div className=" flex gap-[30px] justify-center mt-[30px] ">
                <button className=" btn btn-primary text-[12px] flex items-center gap-[10px] font-semibold ">
                    <span>Add Todo</span>
                    <i className=" fas fa-plus "></i>
                </button>
                <button onClick={() => dispatch(getTodos())} type="button" className=" btn btn-warning text-[12px] flex items-center gap-[10px] font-semibold ">
                    <span>Get Todos</span>
                    <i className="fa-brands fa-get-pocket"></i>
                </button>
                <button onClick={() => dispatch(clearTodo(removeItem()))} type="button" className=" btn btn-danger text-[12px] flex items-center gap-[10px] font-semibold ">
                    <span>Clear Todo</span>
                    <i className=" fas fa-trash "></i>
                </button>
            </div>
        </form>
    )
}

export default TodoForm