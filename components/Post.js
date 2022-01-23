import {
    Row,
    Col,
    Card,
    Modal
} from "react-bootstrap";
import EditPost from "../components/forms/EditPost";
import {
    IconButton,
    TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {
    useState,
    useEffect
} from "react";
import styles from "../styles/Post.module.css";
import {
    useQuery, 
    gql
} from "@apollo/client";
import AccountCircle from '@mui/icons-material/AccountCircle';

function Post({post, GETPOSTS}) {
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // GET USER INFO BY ID FOR ADDITIONAL POST DETAILS
    const [userData, setUserData] = useState({})

    let GETUSER = gql`
        query GetUser($id: ID) {
            getUser(id: $id) {
            id
            name
            birthday
            pfp
            }
        }
    `

    const {loading: loading, error: error, data: data} = useQuery(GETUSER, {
        variables: {
            id: post.author
        }
    })

    useEffect(() => {
        if(!loading) setUserData(data.getUser)
    }, [loading])

    // console.log(userData)
    // console.log(post.author)
    // console.log(post.img)

    return(
        <>
            <Card className="mb-5">
                <Card.Body>
                    <div bsClass="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <a href={`/${userData.id}`} className="custom_anchor">
                                {
                                    userData.pfp ?
                                    <img 
                                    src={pfp} 
                                    className="avatar_style_3">
                                    </img>
                                    :
                                    <AccountCircle className="avatar_style_3"/>
                                } 
                            </a>
                            <div className="text-start">
                                <a href="/" className="custom_anchor">{userData.name}</a>
                                <br></br>
                                <p className="custom_smaller_font">
                                    {post.uploadTime}
                                </p>
                            </div>
                        </div>
                        <div>
                            <EditPost />

                            <IconButton>
                                <DeleteIcon/>
                            </IconButton>
                        </div>
                    </div>
                    <Card.Text>
                        <p className="mt-4">{post.post}</p>
                    </Card.Text>
                </Card.Body>
                {
                    post.img.url ?
                        <Card.Img 
                            src={`http://${post.img.url}`} 
                        />
                    :
                        <></>
                }   
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

            <Modal 
                show={show} 
                onHide={handleClose} 
                centered
                dialogClassName={styles.custom_modal_size}
            >
                <Modal.Header closeButton></Modal.Header>
                    <form id="">
                <Modal.Body>
                    <Row className="">
                        {
                            post.img.url ?
                                <Col xl="9" lg="8" className="mb-3 d-flex align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center">
                                        <img 
                                            src={`http://${post.img.url}`} 
                                            className={styles.single_post_img} 
                                            bsClass="img-fluid"
                                        />    
                                    </div>
                                </Col>
                            :
                                <></>
                        }
                        <Col>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-between mt-3">
                                        <div className="d-flex align-items-center">
                                            <a href={`/${userData.id}`} className="custom_anchor">
                                                {
                                                    userData.pfp ?
                                                    <img 
                                                    src={pfp} 
                                                    className="avatar_style_3">
                                                    </img>
                                                    :
                                                    <AccountCircle className="avatar_style_3"/>
                                                } 
                                            </a>
                                            <div className="text-start">
                                                <a href="/" className="custom_anchor">{userData.name}</a>
                                                <br></br>
                                                <p className="custom_smaller_font">
                                                    {post.uploadTime}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <EditPost />

                                            <IconButton>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <p className="my-4">{post.post}</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <IconButton>
                                                <ThumbUpOffAltIcon/>
                                            </IconButton>
                                            <small className="me-2"><p className="m-0">13 Likes</p></small>
                                            <IconButton onClick={handleShow}>
                                                <ChatBubbleOutlineIcon/>
                                            </IconButton>
                                            <small className="me-2"><p className="m-0">2 Comments</p></small>
                                        </div>
                                        {/* <small className="me-2"><p className="m-0">3 Likes</p></small> */}
                                    </div>
                                    <div className={styles.comments_scroll}>
                                        <div className="d-flex mt-2">
                                            <a href={`/${userData.id}`} className="custom_anchor">
                                                {
                                                    userData.pfp ?
                                                    <img 
                                                    src={pfp} 
                                                    className="avatar_style_2 mt-1 me-3">
                                                    </img>
                                                    :
                                                    <AccountCircle className="avatar_style_2 mt-1 me-3"/>
                                                } 
                                            </a>
                                            <div>
                                                <a className="custom_anchor">Eu Zhean</a>
                                                {/* <small><p>Wed, 14 Jun 2017 07:00:00 GMT</p></small> */}
                                                <p className="custom_smaller_font">Wed, 14 Jun 2017 07:00:00 GMT</p>
                                                <p className="m-0">This is a comment. Wow you're so cool. Sheesh</p>
                                                <div className="d-flex align-items-center">
                                                    <IconButton>
                                                        <ThumbUpOffAltIcon/>
                                                    </IconButton>
                                                    <small><p className="m-0">1 Like</p></small>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="d-flex mt-2">
                                            <a href="/" className="custom_anchor">
                                                <img src="dillon.png" className="avatar_style_2 mt-1 me-3" />
                                                <div className="text-start">
                                                    {/* <br></br> */}
                                                </div>
                                            </a>
                                            <div>
                                                <a className="custom_anchor">Dillon Ooi</a>
                                                {/* <small><p>Wed, 14 Jun 2017 07:00:00 GMT</p></small> */}
                                                <p className="custom_smaller_font">Wed, 14 Jun 2017 07:00:00 GMT</p>
                                                <p className="m-0">This is another comment. Wow you're so not cool. Ew</p>
                                                <div className="d-flex align-items-center">
                                                    <IconButton>
                                                        <ThumbUpOffAltIcon/>
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start align-items-center">
                                        <img src="dillon.png" className="avatar_style_2 me-3" />
                                        <TextField 
                                        id="standard-required"
                                        label="Write a comment..."
                                        size="small" 
                                        name="post"
                                        fullWidth="true"
                                        multiline="true"
                                        className="mt-1"
                                        />
                                        <label className="custom_file_upload custom_icon_button">
                                            <input type="file" style={{display: "none"}} />
                                                <DeleteIcon className="custom_icon_large"/>
                                        </label>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                        <button className="custom_btn_2" type="submit" form="">
                            Submit
                        </button>
                </Modal.Footer>
                    </form>
            </Modal>

            {/* AN EXTRA POST HERE IF YOU WANT TO SEE A DIFFERENT PICTURE */}
            {/* <Card className="mb-5">
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
            </Card> */}
        </>
    )
}

export default Post