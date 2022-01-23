import TopNav from "../components/partials/Navbar"
import {
    Container,
    Row,
    Col,
    Tab,
    Nav
} from "react-bootstrap"
import styles from "../styles/Messages.module.css"
import {
    TextField
} from '@mui/material';

function Messages() {
    return (
        <>
            <Container fluid>

                <TopNav/>

                <Row className="mt-5 pt-5">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="mt-5 pt-5">
                        <Row className={styles.maximum_height}>
                            <Col sm={4}>
                            <h4 className="text-center">Chats</h4>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <div className="d-flex align-items-center">
                                            <img src="xiao.png" className="avatar_style_2 me-2" />
                                            <div>
                                            <h6 className="m-0">Xiao</h6>
                                            <small><p className="m-0 fw-bold">2 new messages</p></small>
                                            </div>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <div className="d-flex align-items-center">
                                            <img src="dillon.png" className="avatar_style_2 me-2" />
                                            <div>
                                            <h6 className="m-0">Dillon</h6>
                                            {/* <small><p className="m-0 fw-bold">2 new messages</p></small> */}
                                            </div>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <div className="d-flex align-items-center">
                                            <img src="euzhean.png" className="avatar_style_2 me-2" />
                                            <div>
                                            <h6 className="m-0">Eu Zhean, but pnggg</h6>
                                            {/* <small><p className="m-0 fw-bold">2 new messages</p></small> */}
                                            </div>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={8}>
                            {/* <Tab.Content className="d-flex" id={styles.testing}> */}
                            <Tab.Content className="" id={styles.testing}>
                                <Tab.Pane eventKey="first">
                                    <div className="d-flex">
                                        <img src="xiao.png" className="avatar_style_1 me-2" />
                                        <h4 className="">Xiao</h4>
                                    </div>
                                    
                                    <div>
                                        <br></br>
                                        <p><span className={styles.friend_message}>Yo wtf is going on</span></p>
                                    </div>

                                    <div>
                                        <br></br>
                                        <p className="d-flex justify-content-end">
                                            <span bsClass="me-start" className={styles.my_message}>
                                                I DONT KNOW
                                            </span>
                                        </p>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>idk u tell me</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p className="custom_smaller_font d-flex justify-content-center">No messages to show</p>
                                </Tab.Pane>
                                                                    
                                <TextField 
                                    id="standard-required"
                                    label="Send a message..."
                                    size="small" 
                                    name="post"
                                    fullWidth="true"
                                    multiline="true"
                                    className="align-self-end"                                    
                                />
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Row>

                {/* <Row className="my-5 pt-4">
                    <Col md="4">
                        <h4 className="text-center">Chats</h4>
                        <div className="mt-3">
                            <a href="/" className="custom_anchor">
                                <img src="xiao.png" className="avatar_style_2 me-2" />
                                Xiao
                                <small>Hi, hello. I am sending...</small>
                            </a>
                        </div>
                        <div className="mt-3">
                            <a href="/" className="custom_anchor">
                                <img src="dillon.png" className="avatar_style_2 me-2" />
                                Dillon Ooi
                            </a>
                        </div>
                        <div className="mt-3">
                            <a href="/" className="custom_anchor">
                                <img src="euzhean.png" className="avatar_style_2 me-2" />
                                Eu Zhean, but pnggg
                            </a>
                        </div>
                    </Col>

                    <Col md="8">
                    
                    </Col>
                </Row> */}

            </Container>
        </>
    )
}

export default Messages