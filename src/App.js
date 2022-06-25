import React from "react";
import ExcerciseCard from './components/excerciseCard';
import SearchBar from './components/searchBar';
import exercise from './data/excerciseData';

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
    // console.log(keyword);
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
          <SearchBar search={this.search}/>
          <div className="displayArea">
            {this.state.visibleExercises.map(f => f.show ? <ExcerciseCard key={f.id} name={f.name} /> : null)};
          </div>
      </div>
    );
  }
}

export default App;
