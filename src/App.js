import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

class App extends React.Component{
  state={
    Person:{
      fullName:"Bakary Traore",
      bio:"king of world",
      /*imgSrc:{myImage},*/
      profession:"student"
    },
    shows:false
  };
  handleShowPerson=()=>{
    this.setState({
      ...this.state,
      show:!this.state.show
    });

  }
  render(){
    return(
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}

export default App;
