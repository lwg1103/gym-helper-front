import React from 'react';
import { default as ExerciseAPIType } from './../API/Exercise'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state: any) => ({ token: state.token });

type ExerciseProps = {
    id: number,
    token: StringConstructor
}

type ExerciseState = {
    exercise: ExerciseAPIType
}

class ExerciseEdit extends React.Component<ExerciseProps, ExerciseState> {
    constructor(props: ExerciseProps) {
        super(props);

        this.state = {
            exercise: {
                id: 0,
                name: "",
                weight: 0,
                repeats: 0,
                series: 0,
                breakTime: 0
            }
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

        fetch(process.env.REACT_APP_API_SERVICE + "/exercise/" + this.props.id, requestMetadata)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        exercise: result
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    handleInputChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(prevState => {
            let exercise = Object.assign({}, prevState.exercise);  // creating copy of state variable

            switch (name) {
                case 'name':
                    exercise.name = value;
                    break;
                case 'weight':
                    exercise.weight = value;
                    break;
                case 'repeats':
                    exercise.repeats = value;
                    break;
                case 'series':
                    exercise.series = value;
                    break;
                case 'breakTime':
                    exercise.breakTime = value;
                    break;
            }

            return { exercise };                                 // return new state object  
        });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        const requestMetadata = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.token
            },
            body: JSON.stringify(this.state.exercise)
        };

        console.log(requestMetadata);

        fetch(process.env.REACT_APP_API_SERVICE + "/exercise/" + this.props.id, requestMetadata)
            .then(
                (result) => {
                    alert('Updated!')
                },
                (error) => {
                    alert(error)
                });
    }

    render() {
        return (
            <Card>
                <h1>{this.state.exercise.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>
                            Name:
                            <input type="text" name="name" value={this.state.exercise.name} onChange={this.handleInputChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Weight [kg]:
                            <input type="text" name="weight" value={this.state.exercise.weight} onChange={this.handleInputChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Repeats:
                            <input type="text" name="repeats" value={this.state.exercise.repeats} onChange={this.handleInputChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Series:
                            <input type="text" name="series" value={this.state.exercise.series} onChange={this.handleInputChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Break [s]:
                            <input type="text" name="breakTime" value={this.state.exercise.breakTime} onChange={this.handleInputChange} />
                        </label>
                    </p>
                    <p>
                        <input type="submit" value="Save" />
                    </p>
                </form>
                <p><Link to={"/"}>back</Link></p>
            </Card>
        );
    }
}

export default connect(mapStateToProps)(ExerciseEdit);