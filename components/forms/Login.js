import TextField from '@mui/material/TextField';
import {useState} from "react"
import {
    useMutation,
    gql
} from "@apollo/client"
import jwt_decode from "jwt-decode"
import {useRouter} from 'next/router'

function Login() {
    const router = useRouter()

    let [user, setUser] = useState({})

    let LOGIN = gql`
        mutation Login($user: LoginInput) {
            login(user: $user) {
                token
            }
        }
    `

    const [login, {data, _, error}] = useMutation(LOGIN)

    let onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    let onSubmitHandler = (e) => {
        e.preventDefault()
        login({
            variables: {
                user: user
            },
            onCompleted: ({login}) => {
                localStorage.setItem("token", login.token)
                let decoded = jwt_decode(login.token)
                localStorage.setItem("userdata", JSON.stringify(decoded.user))
                router.replace("/homepage")
            }
        })
    }

    return(
        <>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-4">
                    <TextField
                    label="E-mail"
                    size="small"
                    name="email"
                    onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <TextField
                    label="Password"
                    type="password"
                    size="small"
                    name="password"
                    onChange={onChangeHandler}
                    />   
                </div>
                <button className="mt-4 custom_btn_1">Log In</button>    
            </form>
        </>
    )
}

export default Login