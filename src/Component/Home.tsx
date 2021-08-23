import React, { useState } from 'react';
import TrainingList from './TrainingList';
import { default as TrainingListApiResponse } from '../API/TrainingList';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({ isAuthenticated: state.isAuthenticated });

type HomeProps = {
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
  }

  render = () => {
    return (
      <div>
        <NavBar />
        {this.renderContent()}
      </div>
    )
  }

  renderContent = () => {
    if (this.props.isAuthenticated) {
      return (<TrainingList />);
    } else {
        return (<Login/>)
    }
  }
}

export default connect(mapStateToProps)(Home);