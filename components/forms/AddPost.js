import { useState } from "react"
import {
    gql,
    useMutation
} from "@apollo/client"
import {
    Modal
} from "react-bootstrap"
// import styles from "../../styles/HomePage.module.css"
import styles from "../../styles/AddPost.module.css"
import {
    // IconButton,
    TextField,
} from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

function AddPost() {
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // ADD POST
    const [thePost, setThePost] = useState({
        author: "61dce5d32474905b51e7e608",
        img: null
    })

    const onChangeHandler = (e) => {
        setThePost({...thePost, [e.target.name]: e.target.value})
    }

    const photoHandler = (e) => {
        setThePost({...thePost, img: e.target.files[0]})
    }

    const ADD_POST = gql`
        mutation addPost(
            $post: String!, 
            $author: String!, 
            $img: Upload,
            ) {
            addPost(thePost: {
                post: $post,
                author: $author,
                img: $img
            }) {
                post
                author
            }
        }
    `

    const [addPost, {data, loading, error}] = useMutation(ADD_POST)

    const onSubmitHandler = e => {
        e.preventDefault()
        addPost({
            variables: thePost
        })
        handleClose()
    }

    return (
        <>
            <div className="my-5">
                <a href="/">
                    <img src="euzhean.jpg" className="avatar_style_3" />
                </a>

                <button className={styles.addpost_btn} onClick={handleShow}>
                    What's on your mind, Eu Zhean?
                </button>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title><h3>Add Post</h3></Modal.Title>
                </Modal.Header>
                    <form onSubmit={onSubmitHandler} id="addPost">
                <Modal.Body>
                        <div className="d-flex align-items-start">
                            <TextField 
                            id="standard-required"
                            label="What's on your mind?"
                            size="small" 
                            name="post" 
                            onChange={onChangeHandler}
                            fullWidth="true"
                            multiline="true"
                            className="mt-1"
                            />
                            <label className="custom_file_upload custom_icon_button ms-3">
                                <input type="file" style={{display: "none"}} onChange={photoHandler} />
                                    <InsertPhotoIcon className="custom_icon_large"/>
                            </label>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                        <button className="custom_btn_2" type="submit" form="addPost">
                            Submit
                        </button>
                </Modal.Footer>
                    </form>
            </Modal>
        </>
    )
}

export default AddPost