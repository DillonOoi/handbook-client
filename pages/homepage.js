import TopNav from "../components/partials/Navbar"
import AddPost from "../components/forms/AddPost"
import {
    Container,
    Row,
    Col
} from "react-bootstrap"
import styles from "../styles/HomePage.module.css"
import Posts from "../components/Posts";
import { useState, useEffect } from "react";
import {useRouter} from 'next/router'
import {
    gql,
    useQuery
} from "@apollo/client"

export async function getStaticProps() {
    return {
        props: {
        }
    }
}

function HomePage() {

    // REDIRECTING TO OTHER PAGES
    const router = useRouter()

    // FOR ADDPOST.JS TO HELP US NOT HAVE TO RELOAD TO SEE NEW POSTS
    let GETPOSTS = gql`
        query GetPosts {
            getPosts {
            id
            uploadTime
            post
            author
            img {
                url
                filename
                mimetype
                encoding
            }
            status
            }
        }
    `
    const {loading, error, data, refetch} = useQuery(GETPOSTS)
    const [posts, setPosts] = useState([])
    useEffect(() => {
		if(!loading) setPosts(data.getPosts)
	}, [posts, data])
    
    // LOGGED-IN USER'S PROFILE PIC, NAME, & ID
    const [pfp, setPfp] = useState(typeof window !== 'undefined'? JSON.parse(localStorage.getItem('userdata')).pfp : null)
    const [name, setName] = useState(typeof window !== 'undefined'? JSON.parse(localStorage.getItem('userdata')).name : null)
    const [uid, setUid] = useState(typeof window !== 'undefined'? JSON.parse(localStorage.getItem('userdata'))._id : null)

    return(
        <>
            <Container fluid>

                <TopNav />

                <Row className="mt-5 pt-4">
                    <Col xl="10" lg="9" md="8">

                        <AddPost pfp={pfp} name={name} uid={uid} refetch={refetch}/>
                        
                        <Row className="justify-content-center">
                            <Col xl="6" lg="7" md="8" sm="9" xs="11" className="">
                                <Posts posts={posts} loading={loading} GETPOSTS={GETPOSTS}/>
                            </Col>
                        </Row>

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