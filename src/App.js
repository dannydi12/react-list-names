import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name';

class App extends React.Component{

  constructor( props ){
    super( props );
    this.state = {
      names : [ "Daniel", "Alfredo", "Julieta", "Mario", "Ana" ]
    }
  }

  render(){
    
    let names = [];

    for ( let i = 0; i < this.state.names.length; i ++ ){
      names.push( <Name firstName = { this.state.names[i] } /> );
    }

    return (
      <div className="App">
        <h1> Hello there people! </h1>
        {
          this.state.names.map( name => {
            return ( <Name firstName = { name } /> );
          })
        }
        { names }

      </div>
    );
  }
}


/*
  function App() {
    return (
      <div className="App">
        <h1> Hello world! </h1>
      </div>
    );
  }
*/

export default App;
