import React from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

type ExerciseProps = {
    id: number,
    name: string,
    weight: number,
    repeats: number,
    series: number,
    breakTime: number
}

class Exercise extends React.Component<ExerciseProps> {
    render() {
      return (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey={this.props.name}>
              <h3>{this.props.name}</h3>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={this.props.name}>
            <Card.Body>
              <Accordion>
                <p>Weight: {this.props.weight} kg</p>
                <p>Repeats: {this.props.repeats}</p>
                <p>Series: {this.props.series}</p>
                <p>Break: {this.props.breakTime} s</p>
              </Accordion>
              <Link to={"/exercise/" + this.props.id}>edit</Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }
  }


export default Exercise;