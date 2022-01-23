import { useState } from "react";
import { 
    Modal,
    Row,
    Col
} from "react-bootstrap";
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Stack from '@mui/material/Stack';
import DatePicker from '@mui/lab/DatePicker';
import {
    useMutation,
    gql
} from "@apollo/client"


function Register() {
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // REGISTRATION
    const [user, setUser] = useState({})


    let REGISTER = gql`
        mutation Register($user: RegisterInput) {
            register(user: $user) {
            id
            name
            birthday
            }
        }
    `

    const [register, {data, _, error}] = useMutation(REGISTER)

    let onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    let onSubmitHandler = (e) => {
        e.preventDefault()
        register({
            variables: {
                user: user
            },
            onCompleted: (data) => {
                alert("Account Registered")
            }
        })
        handleClose()
    }

    let dateHandler = (newValue) => {
        setUser({...user, birthday: newValue})
    }
    
    return(
        <>
            <button className="custom_btn_2" onClick={handleShow}>Register</button>
            
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title><h3>Register</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubmitHandler}>
                        <Row>
                            <Col className="md-6">
                                <div className="mb-4">
                                    <TextField
                                    label="Name"
                                    size="small"
                                    onChange={onChangeHandler}
                                    name="name"
                                    />
                                </div>
                            </Col>
                            <Col className="md-6">
                                <div className="mb-4">
                                    <TextField
                                    label="E-mail"
                                    size="small"
                                    onChange={onChangeHandler}
                                    name="email"
                                    />
                                </div>
                            </Col>
                        </Row>
                            <Col className="md-12">
                                <div className="mb-4">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={3}>
                                            <DatePicker
                                            disableFuture
                                            label="Birthday"
                                            openTo="year"
                                            views={['year', 'month', 'day']}
                                            value={user.birthday}
                                            onChange={dateHandler}
                                            renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </Col>
                        <Row>
                            <Col className="md-6">
                                <div className="mb-4">
                                    <TextField
                                    label="Password"
                                    type="password"
                                    size="small"
                                    onChange={onChangeHandler}
                                    name="password"
                                    />
                                </div>
                            </Col>
                            <Col className="md-6">
                                <div className="mb-4">
                                    <TextField
                                    label="Confirm password"
                                    type="password"
                                    size="small"
                                    onChange={onChangeHandler}
                                    name="confirmPassword"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <button className="custom_btn_2">
                            Register
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Register