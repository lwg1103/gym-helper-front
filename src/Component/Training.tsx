import React from 'react';
import Excercise from './Excercise';
import { default as TrainingAPIType } from './../API/Training'

type TrainingProps = {
    training: TrainingAPIType
}

class Training extends React.Component<TrainingProps> {
    render() {
      return (
        <div>
          <h1>{this.props.training.name}</h1>
          {this.renderExcercises()}
        </div>
      );
    }

    renderExcercises() {
      return  this.props.training.excercises.map((element, i) => {     
          return (<Excercise name={element.name} breakTime={element.breakTime} repeats={element.repeats} series={element.series} weight={element.weight}></Excercise>) 
       })
     }
  }


export default Training;