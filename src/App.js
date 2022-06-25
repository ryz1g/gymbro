import React from "react";
import ExcerciseCard from './components/excerciseCard';
import NavBar from './components/navbar';
import exercise from './data/excerciseData';
import AddData from './components/addData'

class App extends React.Component{
  constructor() {
    super();
    this.exercises=exercise.exercises
    this.state = {
      visibleExercises:exercise.exercises
    };
    this.search = this._search.bind(this);
  }

  _search(keyword) {
    if(keyword==="") {
      this.setState({
        visibleExercises:this.exercises
      })
    }
    else {
      this.setState({
        visibleExercises:this.exercises.filter((f) => {
          if(f.name.toLowerCase().search(keyword.toLowerCase().trim())!== -1) 
            return true;
          return false;
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
          <NavBar search={this.search}/>
          <div className="displayArea">
            {this.state.visibleExercises.map(f => f.show ? <ExcerciseCard key={f.id} name={f.name} info={f.info}/> : null)};
          </div>
          <hr />
          <AddData currentData={this.exercises} />
      </div>
    );
  }
}

export default App;
