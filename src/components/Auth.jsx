import { useState, useContext } from "react"
import ProfileContext from "../store/profileContext"
import axios from "axios"

const Auth = () => {
    const profile = useContext(ProfileContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(false)

    const onSubmitHandler = e => {
        e.preventDefault()
        let body = { username, password }

        axios
            .post(`/api/${register ? "register" : "login"}`, body)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {register ? "Register below!" : "Login below!"}
            <form onSubmit={e => onSubmitHandler(e)}>
                <input
                    placeholder="Enter your username here"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    placeholder="Enter your password here"
                    onChange={e => setPassword(e.target.value)}
                />
                <button> Submit</button>
            </form>
            <button onClick={() => setRegister(!register)}>
                {register ? "Need to login?" : "Need to register?"}
            </button>
        </div>
    )
}

export default Auth
