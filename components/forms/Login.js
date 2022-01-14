import TextField from '@mui/material/TextField';

function Login() {
    return(
        <>
            <div className="mb-4">
                <TextField
                label="E-mail"
                size="small"
                />
            </div>
            <div>
                <TextField
                label="Password"
                type="password"
                size="small"
                />   
            </div>
            <button className="mt-4 custom_btn_1">Log In</button>
        </>
    )
}

export default Login