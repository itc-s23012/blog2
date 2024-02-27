import { useState, useEffect } from 'react'
import { typeEffectiveness } from 'components/typeEffectiveness'
import { selectPokemonByType } from 'components/selectPokemon'

const Home = () => {
  const [opponentPokemonList, setOpponentPokemonList] = useState([])
  const [party, setParty] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const handleOpponentPokemonChange = async (event, index) => {
    const pokemonId = event.target.value
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      )
      if (!response.ok) {
        throw new Error('Pokemon not found')
      }
      const data = await response.json()
      setOpponentPokemonList(prevList => {
        const updatedList = [...prevList]
        updatedList[index] = data
        return updatedList
      })
      setErrorMessage('')
    } catch (error) {
      console.error('Error fetching Pokemon:', error.message)
      setErrorMessage('ポケモンが見つかりませんでした')
    }
  }

  useEffect(() => {
    formParty()
  }, [opponentPokemonList])

  const calculateTypeEffectiveness = (attackerType, defenderType) => {
    return typeEffectiveness[attackerType][defenderType]
  }

  const formParty = () => {
    let selectedParty = []
    opponentPokemonList.forEach(opponentPokemon => {
      if (!opponentPokemon || !opponentPokemon.types) return
      let bestPokemon = null
      let highestEffectiveness = 0
      Object.keys(typeEffectiveness).forEach(type => {
        const effectiveness = calculateTypeEffectiveness(
          type,
          opponentPokemon.types[0].type.name.toLowerCase()
        )
        if (effectiveness > highestEffectiveness) {
          highestEffectiveness = effectiveness
          bestPokemon = selectPokemonByType(type)
        }
      })
      if (bestPokemon) {
        selectedParty.push(bestPokemon)
      }
    })
    selectedParty = selectedParty.slice(0, 5)
    setParty(selectedParty)
  }

  return (
    <div>
      <h1>Pokemon Party Formation</h1>
      <p>Select 5 opponent Pokemon.</p>
      <div>
        {[1, 2, 3, 4, 5].map(index => (
          <div key={index}>
            <label htmlFor={`opponentPokemon${index}`}>
              {`Enter ID for Opponent Pokemon ${index}:`}
            </label>
            <input
              type='number'
              id={`opponentPokemon${index}`}
              onChange={event => handleOpponentPokemonChange(event, index - 1)}
            />
          </div>
        ))}
      </div>
      <h2>Error Message: {errorMessage}</h2>
      <h2>Party</h2>
      <ul>
        {party.map((pokemon, index) => (
          <li key={index}>
            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              {`- Opponent Pokemon: ${opponentPokemonList[index]?.name ||
                'Unknown'} - Party Pokemon: ${pokemon.name} - Type: ${
                pokemon.type
              }`}
              <a
                href={pokemon.url}
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'blue' }}
              >
                Learn More
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
