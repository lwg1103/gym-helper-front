import React from 'react';

type TrainingProps = {
    name: string
}

class Training extends React.Component<TrainingProps> {
    render() {
      return <h1>{this.props.name}</h1>;
    }
  }


export default Training;