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

function EditPost({post, GETPOSTS, setEditing}) {
    console.log(setEditing)

    // MODAL
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    // EDIT POST
    let [editedPost, setEditedPost] = useState({
        id: post.id,
        post: post.post,
        img: post.img.url
    })

    const EDITPOST = gql`
        mutation EditPost($thePost: editPostInput) {
            editPost(thePost: $thePost) {
            id
            uploadTime
            post
            author
            img {
                url
            }
            status
            }
        }
    `

    const [editPost, {data, loading, error}] = useMutation(EDITPOST, {
        refetchQueries: [{ query: GETPOSTS }]
    })

    const onChangeHandler = e => {
        setEditedPost({...editedPost, [e.target.name]: e.target.value})
    }
    const photoHandler = (e) => {
        setEditedPost({...editedPost, img: e.target.files[0]})
    }

    const onSubmitHandler = (e, id) => {
        e.preventDefault()
        editPost({ 
            variables: editedPost 
        })
        setEditing(false)
        handleCloseEditModal()
    }

    return (
        <>  
            <IconButton onClick={handleShowEditModal}>
                <EditIcon/>
            </IconButton>

            <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title><h3>Edit Post</h3></Modal.Title>
                </Modal.Header>
                    <form onSubmit={(e) => onSubmitHandler(e, post.id)} id="editPost">
                        <Modal.Body>
                                <div className="d-flex align-items-start">
                                    <TextField 
                                    id="standard-required"
                                    label={post.post}
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
                                <button className="custom_btn_2" type="submit" form="editPost">
                                    Save Changes
                                </button>
                        </Modal.Footer>
                    </form>
            </Modal>
            
            {/* <form onSubmit={(e) => onSubmitHandler(e, post.id)} id="editPost">
                <div className="d-flex align-items-start">
                    <TextField 
                    id="standard-required"
                    label={post.post}
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
                <button className="custom_btn_2" type="submit" form="editPost">
                    Save Changes
                </button>
            </form> */}
        </>
    )
}

export default EditPost