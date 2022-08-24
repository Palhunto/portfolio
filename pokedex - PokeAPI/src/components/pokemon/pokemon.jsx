import React from "react";
import './style.css'

const Pokemon = (props) => {
    const { pokemon } = props
    const onHearthClick = () => {
        console.log("pode favoritar")
    }

    const heart = "♥"
    console.log("Pokemon", pokemon)
    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-img" />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                    </div>
                    <button className="pokemon-heart-bin" onClick={onHearthClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;