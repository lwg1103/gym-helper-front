import React from 'react';
import Excercise from './Excercise';
import { default as TrainingAPIType } from './../API/Training'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';

type TrainingProps = {
    training: TrainingAPIType
}

class Training extends React.Component<TrainingProps> {
    render() {
      return (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey={String(this.props.training.id)}>
              <h2>{this.props.training.name}</h2>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={String(this.props.training.id)}>
            <Card.Body>
              <Accordion>
                {this.renderExcercises()}
              </Accordion>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }

    renderExcercises() {
      return  this.props.training.excercises.map((element, i) => {     
          return (<Excercise name={element.name} breakTime={element.breakTime} repeats={element.repeats} series={element.series} weight={element.weight}></Excercise>) 
       })
     }
  }


export default Training;