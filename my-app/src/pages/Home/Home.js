import React, { Component } from 'react';
import './Home.scss';

import {userContext} from '../../Context/userContext';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }
 
  
  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };
    this.setState({user})
  }

  render() {
    return (
      <div>
        <h1>Bienvenid@ a NewsToday</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre de usuario:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
        <userContext.Consumer>
        {({loginUser}) => 
          <button type="submit" onClick={()=>loginUser(this.state.name)}>Entrar</button>
        }
        </userContext.Consumer>

        </form>
        
           
      </div>
    )
  }
}


 export default Home;





