/**
 * This function takes a pokemon name as a parameter, and returns a promise that resolves to a JSON
 * object containing the pokemon's data.
 * @returns A promise.
 */

export const searchPokemon = async (pokemon) => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemon = async (limit = 50, offset = 0) => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=&' + offset
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}
