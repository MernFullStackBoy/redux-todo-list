import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners"

const Loader = () => {
    const { status } = useSelector(store => store.todo)

    if (status === "Pending") {
        return <PacmanLoader className=" mx-auto mt-[40px] " size={40} color="#36d7b7" />
    }
    if(status === "Failed") {
        return <h1>Error</h1>
    }
}

export default Loader