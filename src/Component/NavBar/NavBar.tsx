  
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './NavBar.css';

export default class NavBar extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Col md="10" xs="9">
                            <Link className={"navbar-brand"} to={"/"}> 
                                <img src="/logo192.png" width="30" height="30" className="d-inline-block align-top" alt="">
                                </img>
                                GymHelper
                            </Link>
                        </Col>
                    </nav>
                </Row>
            </Container>
        )
    }
}