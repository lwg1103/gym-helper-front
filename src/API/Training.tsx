import Exercise from "./Exercise";

type Training = {
    id: number,
    name: string,
    exercises: [ Exercise ]
}

export default Training;