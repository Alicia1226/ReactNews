import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./Head.scss";

import {userContext} from '../../Context/userContext';

export default class Head extends Component {
  render() {
    return (
      <header className="Head">
        <div className="wrapper">
          <h1>NewsToday</h1>
            <Nav />
            <br />


            <userContext.Consumer>
            {({user,logoutUser}) => 
                <>
                  <p>User: {user.name}</p>

                </>
            }
            </userContext.Consumer>
            
            
        </div>
      </header>
    );
  }
}
