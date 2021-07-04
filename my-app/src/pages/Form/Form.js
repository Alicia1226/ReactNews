import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
    
      <div className="Form">
        <h2>Creación noticia</h2>
  
        <form className="Form" >
          
          <input type="text" placeholder="Autor de la noticia" id="name" name="name" />
  
      
          <input type="text" placeholder="Fecha de publicación" id="date" name="date" />
  
          
          <input type="text" placeholder="Titular" id="title" name="title" />
          
  
          <textarea name="textarea" rows="10" cols="40">Escribe aquí la noticia</textarea>
          {/* <input type="text" placeholder="Escribe tu noticia" id="news" name="news" /> */}
  
          <button id='enviar' name="enviar" type="submit" class="btn">Cargar noticia</button>
        </form>
  
      </div>
    
    );
  }
  }

export default Form;