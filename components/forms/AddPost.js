import { useState } from "react"

function AddPost() {
    const [thePost, setThePost] = useState({})

    const onChangeHandler = (e) => {
        setThePost({...thePost, [e.target.name]: e.target.value})
    }

    const photoHandler = (e) => {
        setThePost({...thePost, thePost: e.target.file[0]})
    }

    const ADD_POST = gql`
        mutation addPost(
            $post: String!, 
            $author: Schema.Types.ObjectId!, 
            $img: [String!],
            ) {
            addPost(thePost: {
                post: $post,
                author: $author,
                img: $img
            }) {
                post
                author
                img
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
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Post</label>
                <input type="text" name="post" onChange={onChangeHandler} />
            </div>
            <div>
                <label>Post</label>
                <input type="text" name="post" onChange={onChangeHandler} />
            </div>
            <div>
                <label>Image</label>
                <input type="file" onChange={photoHandler}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default AddPost