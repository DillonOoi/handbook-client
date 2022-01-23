import { useState } from "react"
import {
    gql,
    useMutation,
    useQuery
} from "@apollo/client"
import {
    Modal
} from "react-bootstrap"
import styles from "../../styles/AddPost.module.css"
import {
    TextField,
} from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AccountCircle from '@mui/icons-material/AccountCircle';


function AddPost({pfp, name, uid, refetch}) {
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // ADD POST
    const [thePost, setThePost] = useState({
        author: uid,
        // img: null
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

        refetch()

        handleClose()
    }

    return (
        <>
            <div className="my-5">
                <a href={`/${uid}`} >
                    {
                        pfp ?
                        <img 
                        src={pfp} 
                        className="avatar_style_3">
                        </img>
                        :
                        <AccountCircle className="avatar_style_3 custom_anchor"/>
                    }
                </a> 

                <button className={styles.addpost_btn} onClick={handleShow}>
                    What's on your mind, {name}?
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