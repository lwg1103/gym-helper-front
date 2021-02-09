import React from 'react';
import TrainingList from './TrainingList';
import {default as TrainingListApiResponse} from '../API/TrainingList';

type HomeProps = {
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

  componentDidMount = () =>  {
    fetch("http://localhost:8080/training")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            availableTrainings: result
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

    render = () => {
      return <TrainingList list={this.state.availableTrainings}></TrainingList>
    }
  }


export default Home;