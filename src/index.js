import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

const hola = "Tino";
function holamundo() {
    const element = (
        <div>
            <h1>Hola mundo</h1>
            <p>Es una prueba de React JS</p>
            <Welcome hola={hola}></Welcome>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('app')
    );
}

class Welcome extends React.Component {
    render(){
        return <h2>Esto es un calvario, {this.props.hola}</h2>
    }
}


function init(){
    holamundo();
};

init();