import { useState } from "react"
import {
    gql,
    useMutation
} from "@apollo/client"
import {
    Modal
} from "react-bootstrap"
import {
    TextField,
} from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

function EditProfile() {
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>  
            {/* <IconButton onClick={handleShow}>
                <EditIcon/>
            </IconButton> */}

            <button className="custom_btn_2" onClick={handleShow}>
                Edit
            </button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title><h3>Edit Profile</h3></Modal.Title>
                </Modal.Header>
                    <form onSubmit="" id="">
                <Modal.Body>
                        <div className="d-flex align-items-start">
                            <TextField 
                            id="standard-required"
                            label="Eu Zhean (default to previous value here or smt)"
                            size="small" 
                            name="post" 
                            onChange=""
                            fullWidth="true"
                            multiline="true"
                            className="mt-1"
                            />
                            <label className="custom_file_upload custom_icon_button ms-3">
                                <input type="file" style={{display: "none"}} onChange="" />
                                    <InsertPhotoIcon className="custom_icon_large"/>
                            </label>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                        <button className="custom_btn_2" type="submit" form="">
                            Save Changes
                        </button>
                </Modal.Footer>
                    </form>
            </Modal>
        </>
    )
}

export default EditProfile