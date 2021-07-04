import React, { Component } from 'react';
import './Home.scss';




class Home extends Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    

  }
 
  handleChange = ({ target }) => {
     this.setState({ [target.name]: target.value });
  };



  
 
  render() {
    return (
      <React.Fragment>
         <h3>Tu nombre de usuario es: {this.state.username}</h3>
        <form>

          <label htmlFor="username">Escribe tu usuario </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick} type="submit">Entrar</button>
          {/* <button 
              type="submit" >Entrar
          </button> */}
        </form>
      </React.Fragment>
    );
  }
 }
 export default Home;





