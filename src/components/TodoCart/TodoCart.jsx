import { useDispatch } from "react-redux"
import { completedItems, removeItem } from "../store/store"
import { useState } from "react"

function TodoCart({ title, id }) {

    const [completed, setCompleted] = useState(false)

    const dispatch = useDispatch()

    return (
        <div className={` ${completed && "opacity-[0.5] bg-slate-200"} justify-between mt-[20px] w-[100%] h-[60px] rounded-[10px] flex items-center pl-[20px] pr-[20px] shadow `}>
            <h1 className=" text-[20px] font-semibold text-[blue] ">{title}</h1>
            <div className=" flex gap-[10px] ">
                <button onClick={() => setCompleted(!completed)} className=" btn btn-success fas fa-check "></button>
                <button onClick={() => dispatch(removeItem(id))} className=" btn btn-danger fas fa-xmark "></button>
            </div>
        </div>
    )
}

export default TodoCart