import React from 'react' ;
import './App.css';
import CharacterList from './Components/CharacterList';
import HeroList from './Components/HeroList';
import SquadStats from './Components/SquadStats';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h2>SuperSquad</h2>
      <div className="col-md-4">
      <CharacterList />
      </div>
      <div className="col-md-4">
      <HeroList />
      </div>
      <div className="col-md-4">
      <SquadStats />
      </div>
    </div>
  );
  }
}

export default App;
