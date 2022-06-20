import React from "react";
import pokemons from "./Data"
import "./App.css"
class Render extends React.Component{
    render() {

        return pokemons.map(dados => (
            <div className='poke'>
                <ul className='lista'>
                <li>{dados.name}</li>
                <li>{dados.type}</li>
                <li>averageWeight: {dados.averageWeight.value} {dados.averageWeight.measurementUnit}</li>
                </ul>
                <img src={dados.image} alt={dados.name} />
            </div>
        ))
    }
}
export default Render