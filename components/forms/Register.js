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


function Register() {
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // DATES
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
      setValue(newValue);
    };
    
    return(
        <>
            <button className="custom_btn_2" onClick={handleShow}>Register</button>
            
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title><h3>Register</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col className="md-6">
                            <div className="mb-4">
                                <TextField
                                id="standard-required"
                                label="Name"
                                size="small"
                                />
                            </div>
                        </Col>
                        <Col className="md-6">
                            <div className="mb-4">
                                <TextField
                                id="standard-required"
                                label="E-mail"
                                size="small"
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
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
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
                                id="standard-required"
                                label="Password"
                                type="password"
                                size="small"
                                />
                            </div>
                        </Col>
                        <Col className="md-6">
                            <div className="mb-4">
                                <TextField
                                id="standard-required"
                                label="Confirm password"
                                type="password"
                                size="small"
                                />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <button className="custom_btn_2" onClick={handleClose}>
                        Register
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Register