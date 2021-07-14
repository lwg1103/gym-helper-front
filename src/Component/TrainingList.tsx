import React from 'react';
import { default as TrainingListAPIType } from './../API/TrainingList'
import Training from './Training';
import Accordion from 'react-bootstrap/Accordion';

type TrainingListProps = {
    list: TrainingListAPIType
}

class TrainingList extends React.Component<TrainingListProps> {
    render() {
       return <Accordion> 
         <h1>Trainings</h1>
           {this.renderTrainings()}
        </Accordion>
      }

    renderTrainings() {
        return this.props.list.map((element, i) => {     
            return (<Training training={element} ></Training>) 
        })
    }
  }

export default TrainingList;