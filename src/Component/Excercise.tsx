import React from 'react';

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
        <div>
          <h2>{this.props.name}</h2>
          <p>Weight: {this.props.weight} kg</p>
          <p>Repeats: {this.props.repeats}</p>
          <p>Series: {this.props.series}</p>
          <p>Break: {this.props.breakTime} s</p>
        </div>
      );
    }
  }


export default Excercise;