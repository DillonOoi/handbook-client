import {
    Row,
    Col,
    Card,
    Modal
} from "react-bootstrap"
import EditPost from "../components/forms/EditPost"
import {
    IconButton,
    TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {useState} from "react";

function Post() {
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Row className="justify-content-center mb-5">
                <Col xl="6" lg="7" md="8" sm="9" xs="11" className="">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <a href="/" className="custom_anchor d-flex align-items-center">
                                    <img src="dillon.png" className="avatar_style_3" />
                                    <div className="text-start">
                                        Dillon Ooi
                                        <br></br>
                                        <small>
                                            Wed, 14 Jun 2017 07:00:00 GMT
                                        </small>
                                    </div>
                                </a>
                                <div>
                                    <EditPost />

                                    <IconButton>
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>
                            </div>
                            <Card.Text>
                                <p className="mt-4">god, i hate my life</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Img src="xiao.png"/>
                        <Card.Body>
                            <div className="">
                                <IconButton>
                                    <ThumbUpOffAltIcon/>
                                </IconButton>
                                <IconButton onClick={handleShow}>
                                    <ChatBubbleOutlineIcon/>
                                </IconButton>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title><h3>Add Post</h3></Modal.Title>
                </Modal.Header>
                    <form id="">
                <Modal.Body>
                    <Row>
                        <Col md="9">Hello</Col>
                        <Col md="3">Hello</Col>
                    </Row>
                        <div className="d-flex align-items-start">
                            <TextField 
                            id="standard-required"
                            label="What's on your mind?"
                            size="small" 
                            name="post"
                            fullWidth="true"
                            multiline="true"
                            className="mt-1"
                            />
                            <label className="custom_file_upload custom_icon_button ms-3">
                                <input type="file" style={{display: "none"}} />
                                    <DeleteIcon className="custom_icon_large"/>
                            </label>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                        <button className="custom_btn_2" type="submit" form="">
                            Submit
                        </button>
                </Modal.Footer>
                    </form>
            </Modal>

            <Row className="justify-content-center mb-5">
                <Col xl="6" lg="7" md="8" sm="9" xs="11" className="">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <a href="/" className="custom_anchor d-flex align-items-center">
                                    <img src="dillon.png" className="avatar_style_3" />
                                    <div className="text-start">
                                        Dillon Ooi
                                        <br></br>
                                        <small>
                                            Wed, 14 Jun 2017 07:00:00 GMT
                                        </small>
                                    </div>
                                </a>
                                <div>
                                    <EditPost />

                                    <IconButton>
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>
                            </div>
                            <Card.Text>
                                <p className="mt-4">god, i hate my life</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Img src="dillon.png"/>
                        <Card.Body>
                            <div className="">
                                <IconButton>
                                    <ThumbUpOffAltIcon/>
                                </IconButton>
                                <IconButton>
                                    <ChatBubbleOutlineIcon/>
                                </IconButton>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>        

            {/* <Row className="justify-content-center mb-5">
                <Col xl="6" lg="7" md="8" sm="9" xs="11" className="post_card">
                    <div className="my-4">
                        <div className="d-flex justify-content-between">
                            <a href="/" className="custom_anchor d-flex align-items-center">
                                <img src="dillon.png" className="avatar_style_3" />
                                <div className="text-start">
                                    Dillon Ooi
                                    <br></br>
                                    <small>
                                        Wed, 14 Jun 2017 07:00:00 GMT
                                    </small>
                                </div>
                            </a>
                            <div>
                                <EditPost />

                                <IconButton>
                                    <DeleteIcon/>
                                </IconButton>
                            </div>
                        </div>
                        <p className="my-3">god, i hate my life</p>
                        <div className="d-flex justify-content-center">
                            <div className="img_container">
                                <img src="xiao.png" className="post_img img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <IconButton>
                            <ThumbUpOffAltIcon/>
                        </IconButton>
                        <IconButton>
                            <ChatBubbleOutlineIcon/>
                        </IconButton>
                    </div>
                </Col>
            </Row>    

            <Row className="justify-content-center mb-5">
                <Col xl="6" lg="7" md="8" sm="9" xs="11" className="post_card">
                    <div className="my-4">
                        <div className="d-flex justify-content-between">
                            <a href="/" className="custom_anchor d-flex align-items-center">
                                <img src="dillon.png" className="avatar_style_3" />
                                <div className="text-start">
                                    Dillon Ooi
                                    <br></br>
                                    <small>
                                        Wed, 14 Jun 2017 07:00:00 GMT
                                    </small>
                                </div>
                            </a>
                            <div>
                                <EditPost/>

                                <IconButton>
                                    <DeleteIcon/>
                                </IconButton>
                            </div>
                        </div>
                        <p className="my-3">god, i hate my life</p>
                        <div className="d-flex justify-content-center">
                            <div className="img_container">
                                <img src="dillon.png" className="post_img img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <IconButton>
                            <ThumbUpOffAltIcon/>
                        </IconButton>
                        <IconButton>
                            <ChatBubbleOutlineIcon/>
                        </IconButton>
                    </div>
                </Col>
            </Row> */}
        </>
    )
}

export default Post