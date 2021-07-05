import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render() {
    return (
    
      <div className="Form">
  
        <form >
          <input type="text" placeholder="Título" id="title" name="title" />
          
          <input type="text" placeholder="Imagen" id="img" name="img" />
  
          <textarea name="textarea" rows="10" cols="40" placeholder="Escribe aquí la noticia"></textarea>
  
          <button id='enviar' name="enviar" type="submit" class="btn">Cargar noticia</button>
        </form>
  
      </div>
    
    );
  }
  }

export default Form;