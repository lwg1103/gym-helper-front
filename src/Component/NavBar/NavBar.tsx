import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './NavBar.css';
import { BiExit } from 'react-icons/bi';
import Cookies from 'universal-cookie';
import Store from '../../store/Store';
import { clearToken } from '../../store/Actions';

type NavBarProps = {
    showLogoutButton: boolean
}

export default class NavBar extends Component<NavBarProps> {

    constructor(props: NavBarProps) {
        super(props);

        this.state = { props };
    }

    logout = () => {
        const cookies = new Cookies();
        cookies.set('token', '', { path: '/' });
        cookies.set('isAuthenticated', false, { path: '/' });
        Store.dispatch(clearToken());
    }

    render() {

        let logoutButton: any;
        if (this.props.showLogoutButton) {
            logoutButton = <Button className="logout-button" onClick={this.logout}><BiExit onClick={this.logout}/></Button>;
        } else {
            logoutButton = null
        }

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
                        <Col md="2" xs="3">
                            {logoutButton}
                        </Col>
                    </nav>
                </Row>
            </Container>
        )
    }
}