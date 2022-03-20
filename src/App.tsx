import './App.css';
import Home from './Component/Home';
import {
  Switch,
  Route
} from "react-router-dom";
import ExerciseEdit from './Component/ExerciseEdit';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/exercise/:id">
          <ExerciseEdit id={1}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
