import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Login.css';
import Store from '../../store/Store';
import { setToken } from '../../store/Actions';
import Cookies from 'universal-cookie';

type LoginProps = {}

type LoginState = {
    username: string,
    password: string
}

export default class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
    
        this.state = {
            username: "",
            password: ""
        }
      }

    login = (event: any) => {
        event.preventDefault();
        const url = process.env.REACT_APP_API_SERVICE + "/authenticate";
        const postBody = {
            username: this.state.username,
            password: this.state.password
        };

        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };

        fetch(url, requestMetadata)
            .then(res => res.json())
            .then(result => {
                if (result.status === 403) {
                    alert("Wrong credentials");
                } else if (result.jwtToken) {
                    this.updateApiKey(result.jwtToken);
                } else {
                    alert("Unknown error, try again later");
                }
            });
    }

    updateApiKey = (key: string) => {
        const cookies = new Cookies();
        cookies.set('token', key, { path: '/' });
        cookies.set('isAuthenticated', true, { path: '/' });
        Store.dispatch(setToken(key));
    }

    render = () => {
        return(
            <Container className="login-wrapper">
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <Row>
                        <label>
                            <Col>
                                <p>Username</p>
                            </Col>
                            <Col>
                                <input type="text" value={this.state.username} onChange={e => this.setState({username: e.target.value})} />
                            </Col>
                        </label>
                    </Row>
                    <Row>
                        <label>
                            <Col>
                                <p>Password</p>
                            </Col>
                            <Col>
                                <input type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}  />
                            </Col>
                        </label>
                    </Row>
                    <Row>
                        <button type="submit">Submit</button>
                    </Row>
                </form>
            </Container>
        )
    }
}