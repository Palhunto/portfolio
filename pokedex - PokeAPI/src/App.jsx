import React from 'react';
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import './styles/global.css';
import { getPokemon, getPokemonData, searchPokemon } from './api';

import Navbar from './components/navbar/Navbar'
import Searchbar from './components/searchbar/searchbar';
import Pokedex from './components/pokedex/pokedex';


/* A function that is called when the user searches for a pokemon. It takes the pokemon name as a
parameter and then calls the searchPokemon function with the pokemon name as a parameter. */
function App() {

const [page, setPage] = useState(0);
const [totalPages, setTotalPage] = useState();
const [loading, setLoading] = useState(false);
const [pokemons, setPokemons] = useState([]);

const itensPerPage = 25;
const fetchPokemons = async () => {
  try {
    setLoading(true)
    const data = await getPokemon(itensPerPage, itensPerPage * page);
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url)
    })

    const results = await Promise.all(promises);
    setPokemons(results);
    setLoading(false);
    setTotalPage(Math.ceil(data.count / itensPerPage))
  } catch (error) {
    console.log("fetchPokemons error ", error);
  }
}

useEffect(() => { 
  fetchPokemons();
}, [page])


  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex 
      pokemons ={pokemons} 
      loading={loading} 
      page={page} 
      totalPages = {totalPages} 
      setPage= {setPage}
      />
    </div>
  )
}

export default App
