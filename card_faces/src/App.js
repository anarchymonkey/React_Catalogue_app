import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {

      users:[
        {
          name : "Aniket"
        },
        {
          name : "Amitava"
        },
        {
          name : "Tula"
        }
      ]
  }
}

  render(){

      return(
        <div>
        {
          this.state.users.map((people,index)=>{
            return(
              <ul>
                <li key={people.name}>{people.name}</li>
              </ul>
          )}) 
        }
        </div>
      )
  }
}

export default App;
