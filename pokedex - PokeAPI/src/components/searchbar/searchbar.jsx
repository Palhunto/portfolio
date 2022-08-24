import React, {useState} from "react";
import './styles.css'
import { searchPokemon } from "../../api"; 

const Searchbar = () => {
    const [search, setSearch] = useState("ditto");
    const [pokemon, setPokemon] = useState();

    const onChangePokemon = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClick = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result);
      }

    return (
        <div className="searchbar-container"> 
            <div className="searchbar">
                <input 
                    placeholder="Buscar Pokémon"
                    onChange={onChangePokemon}
                /> 
            </div>
            <div className="searchbar-button">
                <button onClick={onButtonClick}> Buscar </button>
            </div>

            {pokemon && (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>    
            )}

        </div> 
    )
}

export default Searchbar;