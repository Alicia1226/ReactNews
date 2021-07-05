import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Head from "./Components/Head";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { userContext } from "./Context/userContext";


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: {
        name:""
      }
    }
  }
  
  login = (name) => this.setState({user:{name}});
  

  render() {
    const value = {
      user: this.state.user,
      loginUser: this.login
    }

    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={value}>
            <Head/>
            <Main/>
          </userContext.Provider>
        </BrowserRouter>
        <Footer/>
      </div>
    )
  }
}

export default App
