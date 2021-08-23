import React from 'react';
import { default as TrainingListAPIType } from './../API/TrainingList'
import Training from './Training';
import Accordion from 'react-bootstrap/Accordion';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({ token: state.token });

type TrainingListProps = {
    token: StringConstructor
}

type TrainingListState = {
  list: TrainingListAPIType
}

class TrainingList extends React.Component<TrainingListProps, TrainingListState> {
    
    constructor(props: TrainingListProps) {
      super(props);

      this.state = {
        list: []
      }
    }
    
    componentDidMount = () => {
      const requestMetadata = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.props.token
        }
      };
  
      fetch(process.env.REACT_APP_API_SERVICE + "/training", requestMetadata)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              list: result
            });
          },
          (error) => {
            console.log(error)
          }
        )
    }

    render() {
       return <Accordion> 
         <h1>Trainings</h1>
           {this.renderTrainings()}
        </Accordion>
      }

    renderTrainings() {
        return this.state.list.map((element, i) => {     
            return (<Training training={element} ></Training>) 
        })
    }
  }

export default connect(mapStateToProps)(TrainingList);