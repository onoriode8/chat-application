import { createContext, useState } from "react"


const AuthContext = createContext({
    sideDrawer: false
})

const AuthContextProvider = (props) => {
    const [sideDrawer, setSideDrawer] = useState(false)

    return (
        <AuthContext >
            {props.children}
        </AuthContext>
    )
}

export default AuthContextProvider;