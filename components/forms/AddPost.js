import { useState } from "react"
import {
    gql,
    useMutation
} from "@apollo/client"
import {
    Row, 
    Col,
    Modal
} from "react-bootstrap"

function AddPost() {
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
    }

    return (
        <Row>
            <form onSubmit={onSubmitHandler}>
                {JSON.stringify(thePost)}
                <div>
                    <label>Post</label>
                    <input type="text" name="post" onChange={onChangeHandler} />
                </div>
                <div>
                    <label>Image</label>
                    <input type="file" onChange={photoHandler}/>
                </div>
                <button className="custom_btn_1">Submit</button>
            </form>
        </Row>
    )
}

export default AddPost