import React from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';

type ExcerciseProps = {
    name: string,
    weight: number,
    repeats: number,
    series: number,
    breakTime: number
}

class Excercise extends React.Component<ExcerciseProps> {
    render() {
      return (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey={this.props.name}>
              <h1>{this.props.name}</h1>
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
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }
  }


export default Excercise;