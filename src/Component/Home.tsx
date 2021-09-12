import React from 'react';
import TrainingList from './TrainingList';
import { default as TrainingListApiResponse } from '../API/TrainingList';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import { connect } from 'react-redux';
import Store from '../store/Store';
import { setToken, clearToken } from '../store/Actions';
import Cookies from 'universal-cookie';

const mapStateToProps = (state: any) => ({ token: state.token, isAuthenticated: state.isAuthenticated });

type HomeProps = {
  token: string,
  isAuthenticated: boolean
}

type HomeState = {
  availableTrainings: TrainingListApiResponse
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
      availableTrainings: []
    }
    this.loadApiKey();
  }

  loadApiKey = () => {
    const cookies = new Cookies();
    var token = cookies.get('token')

    console.log(token);

    if (!token) {
      Store.dispatch(clearToken());
    } else {
      Store.dispatch(setToken(token));
    }
  }

  render = () => {
    return (
      <div>
        <NavBar showLogoutButton={this.props.isAuthenticated}/>
        {this.renderContent()}
      </div>
    )
  }

  renderContent = () => {
    if (this.props.isAuthenticated) {
      return (<TrainingList />);
    } else {
      return (<Login />)
    }
  }
}

export default connect(mapStateToProps)(Home);