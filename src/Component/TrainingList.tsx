import React from 'react';
import { default as TrainingListAPIType } from './../API/TrainingList'
import Training from './Training';

type TrainingListProps = {
    list: TrainingListAPIType
}

class TrainingList extends React.Component<TrainingListProps> {
    render() {
       return  this.props.list.map((element, i) => {     
           return (<Training name={element.name}></Training>) 
        })
      }
  }

export default TrainingList;