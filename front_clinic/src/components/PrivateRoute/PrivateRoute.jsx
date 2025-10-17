import { Navigate } from "react-router"
import { useAuth } from "../../contexts/AuthContext"

const PrivateRoute = ({children}) => {
    const {user} = useAuth()

    if(!user){
        return <Navigate to='/' replace/>
    }

    return
}

export default PrivateRoute