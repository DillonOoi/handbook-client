import {
    Container,
    Row,
    Col
} from "react-bootstrap"
import Register from "../components/forms/Register"
import Login from "../components/forms/Login"
import styles from "../styles/Landing.module.css"

function Landing() {
    return(
        <Container className={styles.center_everything}>
            <Row className="align-items-center">
                <Col className="md-6">
                    <div className="d-flex align-items-center">
                        <img className={styles.landing_logo} src="handbook-logo.png"/>
                        <h1>handbook</h1>
                    </div>
                    <p>Handbook helps you connect and share with the people in your life</p>
                </Col>

                <Col className="md-6 text-center">
                    <Login />
                    <hr></hr>
                    <Register />
                </Col>
            </Row>
        </Container>
    )
}

export default Landing