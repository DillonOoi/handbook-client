import TopNav from "../components/partials/Navbar";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import EditProfile from "../components/forms/EditProfile";
import { useRouter } from 'next/router';
import {
    useState,
    useEffect
} from "react";
import {
    useQuery, 
    gql,
    useMutation
} from "@apollo/client"
import AccountCircle from '@mui/icons-material/AccountCircle';
import Posts from "../components/Posts";
import Post from "../components/Post";


function Profile() {
    const [me, setMe] = useState(false)
    const [isFriend, setIsFriend] = useState(false)
    const router = useRouter()
    // VISITING PROFILE ID
    const { uid } = router.query

    // YOUR OWN DATA
    const [user, setUser] = useState(typeof window !== 'undefined'? JSON.parse(localStorage.getItem('userdata')) : null)
    // YOUR OWN ID
    const [mid, setMid] = useState(user ? user._id : null)
    
    const [userData, setUserData] = useState({})
    const [posts, setPosts] = useState([])
    
    
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

    let GETURPOSTS = gql`
        query GetUrPosts($pid: ID) {
            getUrPosts(id: $pid) {
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

    let ADDFRIEND = gql`
        mutation AddFriend($friend: AddFriendInput) {
            addFriend(friend: $friend) {
            id
            userId
            userId2
            status
            addTime
            }
        }
    `

    const {loading: loading, error: error, data: data} = useQuery(GETUSER, {
        variables: {
            id: uid
        }
    })

    const {loading: pLoading, error: pError, data: pData} = useQuery(GETURPOSTS, {
        variables: {
            pid: uid
        }
    })

    const [addFriend, {fData, _, fError}] = useMutation(ADDFRIEND)

    useEffect(() => {

        if(uid === user._id) {
            setMe(true)
        }

        if(!loading) setUserData(data.getUser)
        
        if(!pLoading) setPosts(pData.getUrPosts)

    }, [loading, pLoading])

    let showPosts = loading ? <h1>Loading...</h1> : 
	posts.map(post => 
		<Post key={post.id} post={post} GETURPOSTS={GETURPOSTS}/>
	)

    // ADD FRIEND 
    let addFriendHandler = () => {
        addFriend({
            variables: {
                friend: {
                    "userId": mid,
                    "userId2": uid 
                }
            },
            onCompleted: (_) => {
                alert("Friend Request Sent")
            }
        })
    }


    return(
        <>
            <Container>

                <TopNav/>

                <Row className="my-5 pt-4">  
                    <div className="d-flex justify-content-center mt-5 mb-3">
                        {
                            userData.pfp ?
                            <img 
                            src={pfp} 
                            className="avatar_style_4">
                            </img>
                            :
                            <AccountCircle className="avatar_style_4"/>
                        }   
                    </div>
                    <div className="d-flex justify-content-center">
                        <h3>{userData.name}</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        {
                            me ?
                            <EditProfile />
                            :
                            <button className="custom_btn_2" onClick={addFriendHandler}>
                                Add Friend
                            </button>
                        }
                    </div>
                </Row>
                
                <Row>
                    <Col md="4">
                        <h4 className="text-center">Friends</h4>
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
                    </Col>
                    <Col md="8">
                        <h4 className="text-center">Posts</h4>
                        {showPosts}
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Profile