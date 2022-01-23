import {useEffect, useState} from 'react'
import {
	gql,
	useQuery
} from '@apollo/client'
import Post from "./Post"

function UrPosts() {
    let GETPOSTS = gql`
        query GetPosts {
            getPosts {
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

    const {loading, error, data} = useQuery(GETPOSTS)
	const [posts, setPosts] = useState([])

    useEffect(() => {
		if(!loading) setPosts(data.getPosts)
	}, [posts, data])

    let showPosts = loading ? <h1>Loading...</h1> : 
	posts.map(post => 
		<Post key={post.id} post={post} GETPOSTS={GETPOSTS}/>
	)

    return(
        <>
            {showPosts}
        </>
    )
}

export default UrPosts