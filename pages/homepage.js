import TopNav from "../components/partials/Navbar"
import AddPost from "../components/forms/AddPost"
import {
    Container,
    Row,
    Col
} from "react-bootstrap"
import styles from "../styles/HomePage.module.css"

import EditPost from "../components/forms/EditPost"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import Post from "../components/Post";


function HomePage() {
    return(
        <>
            <Container fluid>

                <TopNav />

                <Row className="mt-5 pt-4">
                    <Col xl="10" lg="9" md="8">

                        <AddPost />

                        <Post />

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
                        </Row>     */}

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

                    </Col>

                    <Col xl="2" lg="3" md="4" className={styles.friends_list}>
                        <h4>Friends</h4>
                        <div className={styles.friends_scroll}>
                            <div className="mt-3">
                                <a href="/" className="custom_anchor">
                                    <img src="xiao.png" className="avatar_style_2 me-2" />
                                    Xiao
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
                            <div className="mt-3">
                                <a href="/" className="custom_anchor">
                                    <img src="dillon.png" className="avatar_style_2 me-2" />
                                    Dillon Ooi
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
                                    <img src="dillon.png" className="avatar_style_2 me-2" />
                                    Dillon Ooi
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
                                    <img src="dillon.png" className="avatar_style_2 me-2" />
                                    Dillon Ooi
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
                                    <img src="dillon.png" className="avatar_style_2 me-2" />
                                    Dillon Ooi
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
                                    <img src="dillon.png" className="avatar_style_2 me-2" />
                                    Dillon Ooi
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
                                    <img src="dillon.png" className="avatar_style_2 me-2" />
                                    Dillon Ooi
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
                                    <img src="dillon.png" className="avatar_style_2 me-2" />
                                    Dillon Ooi
                                </a>
                            </div>
                            <div className="mt-3">
                                <a href="/" className="custom_anchor">
                                    <img src="euzhean.png" className="avatar_style_2 me-2" />
                                    Ayy Wassup
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default HomePage