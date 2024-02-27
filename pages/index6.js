import { useState, useEffect } from 'react'
const typeEffectiveness = {
  normal: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 0.5,
    ghost: 0,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },
  fire: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    electric: 1,
    grass: 2,
    ice: 2,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 2,
    rock: 0.5,
    ghost: 1,
    dragon: 0.5,
    dark: 1,
    steel: 2,
    fairy: 1
  },
  water: {
    normal: 1,
    fire: 2,
    water: 0.5,
    electric: 1,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 2,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1
  },
  electric: {
    normal: 1,
    fire: 1,
    water: 2,
    electric: 0.5,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 0,
    flying: 2,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1
  },
  grass: {
    normal: 1,
    fire: 0.5,
    water: 2,
    electric: 1,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 0.5,
    ground: 2,
    flying: 0.5,
    psychic: 1,
    bug: 0.5,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },
  ice: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    electric: 1,
    grass: 2,
    ice: 0.5,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 2,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 2,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },
  fighting: {
    normal: 2,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 2,
    fighting: 1,
    poison: 0.5,
    ground: 1,
    flying: 0.5,
    psychic: 0.5,
    bug: 0.5,
    rock: 2,
    ghost: 0,
    dragon: 1,
    dark: 2,
    steel: 2,
    fairy: 0.5
  },
  poison: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 2,
    ice: 1,
    fighting: 1,
    poison: 0.5,
    ground: 0.5,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 0.5,
    ghost: 0.5,
    dragon: 1,
    dark: 1,
    steel: 0,
    fairy: 2
  },
  ground: {
    normal: 1,
    fire: 2,
    water: 1,
    electric: 2,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 2,
    ground: 1,
    flying: 0,
    psychic: 1,
    bug: 0.5,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 2,
    fairy: 1
  },
  flying: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 0.5,
    grass: 2,
    ice: 1,
    fighting: 2,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 2,
    rock: 0.5,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },
  psychic: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 2,
    poison: 2,
    ground: 1,
    flying: 1,
    psychic: 0.5,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 0,
    steel: 0.5,
    fairy: 1
  },
  ghost: {
    normal: 0,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 2.0,
    bug: 1,
    rock: 1,
    ghost: 2.0,
    dragon: 1,
    dark: 0.5,
    steel: 1,
    fairy: 1
  }
}

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

  const selectPokemonByType = types => {
    const availablePokemons = [
      {
        id: 1,
        name: 'Bulbasaur',
        type: 'grass' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/1'
      },
      {
        id: 2,
        name: 'Ivysaur',
        type: 'grass' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/2'
      },
      {
        id: 3,
        name: 'Venusaur',
        type: 'grass' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/3'
      },
      {
        id: 4,
        name: 'Charmander',
        type: 'fire',
        url: 'https://pokeapi.co/api/v2/pokemon/4'
      },
      {
        id: 5,
        name: 'Charmeleon',
        type: 'fire',
        url: 'https://pokeapi.co/api/v2/pokemon/5'
      },
      {
        id: 6,
        name: 'Charizard',
        type: 'fire' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/6'
      },
      {
        id: 7,
        name: 'Squirtle',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/7'
      },
      {
        id: 8,
        name: 'Wartortle',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/8'
      },
      {
        id: 9,
        name: 'Blastoise',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/9'
      },
      {
        id: 10,
        name: 'Caterpie',
        type: 'bug',
        url: 'https://pokeapi.co/api/v2/pokemon/10'
      },
      {
        id: 11,
        name: 'Metapod',
        type: 'bug',
        url: 'https://pokeapi.co/api/v2/pokemon/11'
      },
      {
        id: 12,
        name: 'Butterfree',
        type: 'bug' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/12'
      },
      {
        id: 13,
        name: 'Weedle',
        type: 'bug' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/13'
      },
      {
        id: 14,
        name: 'Kakuna',
        type: 'bug' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/14'
      },
      {
        id: 15,
        name: 'Beedrill',
        type: 'bug' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/15'
      },
      {
        id: 16,
        name: 'Pidgey',
        type: 'normal' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/16'
      },
      {
        id: 17,
        name: 'Pidgeotto',
        type: 'normal' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/17'
      },
      {
        id: 18,
        name: 'Pidgeot',
        type: 'normal' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/18'
      },
      {
        id: 19,
        name: 'Rattata',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/19'
      },
      {
        id: 20,
        name: 'Raticate',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/20'
      },
      {
        id: 21,
        name: 'Spearow',
        type: 'normal' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/21'
      },
      {
        id: 22,
        name: 'Fearow',
        type: 'normal' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/22'
      },
      {
        id: 23,
        name: 'Ekans',
        type: 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/23'
      },
      {
        id: 24,
        name: 'Arbok',
        type: 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/24'
      },
      {
        id: 25,
        name: 'Pikachu',
        type: 'electric',
        url: 'https://pokeapi.co/api/v2/pokemon/25'
      },
      {
        id: 26,
        name: 'Raichu',
        type: 'electric',
        url: 'https://pokeapi.co/api/v2/pokemon/26'
      },
      {
        id: 27,
        name: 'Sandshrew',
        type: 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/27'
      },
      {
        id: 28,
        name: 'Sandslash',
        type: 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/28'
      },
      {
        id: 29,
        name: 'Nidoran♀',
        type: 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/29'
      },
      {
        id: 30,
        name: 'Nidorina',
        type: 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/30'
      },
      {
        id: 31,
        name: 'Nidoqueen',
        type: 'poison' / 'groung',
        url: 'https://pokeapi.co/api/v2/pokemon/31'
      },
      {
        id: 32,
        name: 'Nidoran♂',
        type: 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/32'
      },
      {
        id: 33,
        name: 'Nidorino',
        type: 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/33'
      },
      {
        id: 34,
        name: 'Nidoking',
        type: 'poison' / 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/34'
      },
      {
        id: 35,
        name: 'Clefairy',
        type: 'fairy',
        url: 'https://pokeapi.co/api/v2/pokemon/35'
      },
      {
        id: 36,
        name: 'Clefable',
        type: 'fairy',
        url: 'https://pokeapi.co/api/v2/pokemon/36'
      },
      {
        id: 37,
        name: 'Vulpix',
        type: 'fire',
        url: 'https://pokeapi.co/api/v2/pokemon/37'
      },
      {
        id: 38,
        name: 'Ninetales',
        type: 'fire',
        url: 'https://pokeapi.co/api/v2/pokemon/38'
      },
      {
        id: 39,
        name: 'Jigglypuff',
        type: 'normal' / 'fairy',
        url: 'https://pokeapi.co/api/v2/pokemon/39'
      },
      {
        id: 40,
        name: 'Wigglytuff',
        type: 'normal' / 'fairy',
        url: 'https://pokeapi.co/api/v2/pokemon/40'
      },
      {
        id: 41,
        name: 'Zubat',
        type: 'poison' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/41'
      },
      {
        id: 42,
        name: 'Golbat',
        type: 'poison' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/42'
      },
      {
        id: 43,
        name: 'Oddish',
        type: 'grass' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/43'
      },
      {
        id: 44,
        name: 'Gloom',
        type: 'grass' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/44'
      },
      {
        id: 45,
        name: 'Vileplume',
        type: 'grass' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/45'
      },
      {
        id: 46,
        name: 'Paras',
        type: 'bug' / 'grass',
        url: 'https://pokeapi.co/api/v2/pokemon/46'
      },
      {
        id: 47,
        name: 'Parasect',
        type: 'bug' / 'grass',
        url: 'https://pokeapi.co/api/v2/pokemon/47'
      },
      {
        id: 48,
        name: 'Venonat',
        type: 'bug' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/48'
      },
      {
        id: 49,
        name: 'Venomoth',
        type: 'bug' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/49'
      },
      {
        id: 50,
        name: 'Diglett',
        type: 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/50'
      },
      {
        id: 51,
        name: 'Dugtrio',
        type: 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/51'
      },
      {
        id: 52,
        name: 'Meowth',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/52'
      },
      {
        id: 53,
        name: 'Persian',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/53'
      },
      {
        id: 54,
        name: 'Psyduck',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/54'
      },
      {
        id: 55,
        name: 'Golduck',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/55'
      },
      {
        id: 56,
        name: 'Mankey',
        type: 'fighting',
        url: 'https://pokeapi.co/api/v2/pokemon/56'
      },
      {
        id: 57,
        name: 'Primeape',
        type: 'fighting',
        url: 'https://pokeapi.co/api/v2/pokemon/57'
      },
      {
        id: 58,
        name: 'Growlithe',
        type: 'fire',
        url: 'https://pokeapi.co/api/v2/pokemon/58'
      },
      {
        id: 59,
        name: 'Arcanine',
        type: 'fire',
        url: 'https://pokeapi.co/api/v2/pokemon/59'
      },
      {
        id: 60,
        name: 'Poliwag',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/60'
      },
      {
        id: 61,
        name: 'Poliwhirl',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/61'
      },
      {
        id: 62,
        name: 'Poliwrath',
        type: 'water' / 'fighting',
        url: 'https://pokeapi.co/api/v2/pokemon/62'
      },
      {
        id: 63,
        name: 'Abra',
        type: 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/63'
      },
      {
        id: 64,
        name: 'Kadabra',
        type: 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/64'
      },
      {
        id: 65,
        name: 'Alakazam',
        type: 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/65'
      },
      {
        id: 66,
        name: 'Machop',
        type: 'fighting',
        url: 'https://pokeapi.co/api/v2/pokemon/66'
      },
      {
        id: 67,
        name: 'Machoke',
        type: 'fighting',
        url: 'https://pokeapi.co/api/v2/pokemon/67'
      },
      {
        id: 68,
        name: 'Machamp',
        type: 'fighting',
        url: 'https://pokeapi.co/api/v2/pokemon/68'
      },
      {
        id: 69,
        name: 'Bellsprout',
        type: 'grass' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/69'
      },
      {
        id: 70,
        name: 'Weepinbell',
        type: 'grass' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/70'
      },
      {
        id: 71,
        name: 'Victreebel',
        type: 'grass' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/71'
      },
      {
        id: 72,
        name: 'Tentacool',
        type: 'water' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/72'
      },
      {
        id: 73,
        name: 'Tentacruel',
        type: 'water' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/73'
      },
      {
        id: 74,
        name: 'Geodude',
        type: 'rock' / 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/74'
      },
      {
        id: 75,
        name: 'Graveler',
        type: 'rock' / 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/75'
      },
      {
        id: 76,
        name: 'Golem',
        type: 'rock' / 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/76'
      },
      {
        id: 77,
        name: 'Ponyta',
        type: 'fire',
        url: 'https://pokeapi.co/api/v2/pokemon/77'
      },
      {
        id: 78,
        name: 'Rapidash',
        type: 'fire',
        url: 'https://pokeapi.co/api/v2/pokemon/78'
      },
      {
        id: 79,
        name: 'Slowpoke',
        type: 'water' / 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/79'
      },
      {
        id: 80,
        name: 'Slowbro',
        type: 'water' / 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/80'
      },
      {
        id: 81,
        name: 'Magnemite',
        type: 'electric' / 'steel',
        url: 'https://pokeapi.co/api/v2/pokemon/81'
      },
      {
        id: 82,
        name: 'Magneton',
        type: 'electric' / 'steel',
        url: 'https://pokeapi.co/api/v2/pokemon/82'
      },
      {
        id: 83,
        name: 'Farfetch',
        type: 'normal' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/83'
      },
      {
        id: 84,
        name: 'Doduo',
        type: 'normal' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/84'
      },
      {
        id: 85,
        name: 'Dodrio',
        type: 'normal' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/85'
      },
      {
        id: 86,
        name: 'Seel',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/86'
      },
      {
        id: 87,
        name: 'Dewgong',
        type: 'water' / 'ice',
        url: 'https://pokeapi.co/api/v2/pokemon/87'
      },
      {
        id: 88,
        name: 'Grimer',
        type: 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/88'
      },
      {
        id: 89,
        name: 'Muk',
        type: 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/89'
      },
      {
        id: 90,
        name: 'Shellder',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/90'
      },
      {
        id: 91,
        name: 'Cloyster',
        type: 'water' / 'ice',
        url: 'https://pokeapi.co/api/v2/pokemon/91'
      },
      {
        id: 92,
        name: 'Gastly',
        type: 'ghost' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/92'
      },
      {
        id: 93,
        name: 'Haunter',
        type: 'ghost' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/93'
      },
      {
        id: 94,
        name: 'Gengar',
        type: 'ghost' / 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/94'
      },
      {
        id: 95,
        name: 'Onix',
        type: 'rock' / 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/95'
      },
      {
        id: 96,
        name: 'Drowzee',
        type: 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/96'
      },
      {
        id: 97,
        name: 'Hypno',
        type: 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/97'
      },
      {
        id: 98,
        name: 'Krabby',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/98'
      },
      {
        id: 99,
        name: 'Kingler',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/99'
      },
      {
        id: 100,
        name: 'Voltorb',
        type: 'electric',
        url: 'https://pokeapi.co/api/v2/pokemon/100'
      },
      {
        id: 101,
        name: 'Electrode',
        type: 'electric',
        url: 'https://pokeapi.co/api/v2/pokemon/101'
      },
      {
        id: 102,
        name: 'Exeggcute',
        type: 'grass' / 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/102'
      },
      {
        id: 103,
        name: 'Exeggutor',
        type: 'grass' / 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/103'
      },
      {
        id: 104,
        name: 'Cubone',
        type: 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/104'
      },
      {
        id: 105,
        name: 'Marowak',
        type: 'ground',
        url: 'https://pokeapi.co/api/v2/pokemon/105'
      },
      {
        id: 106,
        name: 'Hitmonlee',
        type: 'fighting',
        url: 'https://pokeapi.co/api/v2/pokemon/106'
      },
      {
        id: 107,
        name: 'Hitmonchan',
        type: 'fighting',
        url: 'https://pokeapi.co/api/v2/pokemon/107'
      },
      {
        id: 108,
        name: 'Lickitung',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/108'
      },
      {
        id: 109,
        name: 'Koffing',
        type: 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/109'
      },
      {
        id: 110,
        name: 'Weezing',
        type: 'poison',
        url: 'https://pokeapi.co/api/v2/pokemon/110'
      },
      {
        id: 111,
        name: 'Rhyhorn',
        type: 'ground' / 'rock',
        url: 'https://pokeapi.co/api/v2/pokemon/111'
      },
      {
        id: 112,
        name: 'Rhydon',
        type: 'ground' / 'rock',
        url: 'https://pokeapi.co/api/v2/pokemon/112'
      },
      {
        id: 113,
        name: 'Chansey',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/113'
      },
      {
        id: 114,
        name: 'Tangela',
        type: 'grass',
        url: 'https://pokeapi.co/api/v2/pokemon/114'
      },
      {
        id: 115,
        name: 'Kangaskhan',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/115'
      },
      {
        id: 116,
        name: 'Horsea',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/116'
      },
      {
        id: 117,
        name: 'Seadra',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/117'
      },
      {
        id: 118,
        name: 'Goldeen',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/118'
      },
      {
        id: 119,
        name: 'Seaking',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/119'
      },
      {
        id: 120,
        name: 'Staryu',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/120'
      },
      {
        id: 121,
        name: 'Starmie',
        type: 'water' / 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/121'
      },
      {
        id: 122,
        name: 'Mr. Mime',
        type: 'psychic' / 'fairy',
        url: 'https://pokeapi.co/api/v2/pokemon/122'
      },
      {
        id: 123,
        name: 'Scyther',
        type: 'bug' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/123'
      },
      {
        id: 124,
        name: 'Jynx',
        type: 'ice' / 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/124'
      },
      {
        id: 125,
        name: 'Electabuzz',
        type: 'electric',
        url: 'https://pokeapi.co/api/v2/pokemon/125'
      },
      {
        id: 126,
        name: 'Magmar',
        type: 'fire',
        url: 'https://pokeapi.co/api/v2/pokemon/126'
      },
      {
        id: 127,
        name: 'Pinsir',
        type: 'bug',
        url: 'https://pokeapi.co/api/v2/pokemon/127'
      },
      {
        id: 128,
        name: 'Tauros',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/128'
      },
      {
        id: 129,
        name: 'Magikarp',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/129'
      },
      {
        id: 130,
        name: 'Gyarados',
        type: 'water' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/130'
      },
      {
        id: 131,
        name: 'Lapras',
        type: 'water' / 'ice',
        url: 'https://pokeapi.co/api/v2/pokemon/131'
      },
      {
        id: 132,
        name: 'Ditto',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/132'
      },
      {
        id: 133,
        name: 'Eevee',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/133'
      },
      {
        id: 134,
        name: 'Vaporeon',
        type: 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/134'
      },
      {
        id: 135,
        name: 'Jolteon',
        type: 'electric',
        url: 'https://pokeapi.co/api/v2/pokemon/135'
      },
      {
        id: 136,
        name: 'Flareon',
        type: 'fire',
        url: 'https://pokeapi.co/api/v2/pokemon/136'
      },
      {
        id: 137,
        name: 'Porygon',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/137'
      },
      {
        id: 138,
        name: 'Omanyte',
        type: 'rock' / 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/138'
      },
      {
        id: 139,
        name: 'Omastar',
        type: 'rock' / 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/139'
      },
      {
        id: 140,
        name: 'Kabuto',
        type: 'rock' / 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/140'
      },
      {
        id: 141,
        name: 'Kabutops',
        type: 'rock' / 'water',
        url: 'https://pokeapi.co/api/v2/pokemon/141'
      },
      {
        id: 142,
        name: 'Aerodactyl',
        type: 'rock' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/142'
      },
      {
        id: 143,
        name: 'Snorlax',
        type: 'normal',
        url: 'https://pokeapi.co/api/v2/pokemon/143'
      },
      {
        id: 144,
        name: 'Articuno',
        type: 'ice' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/144'
      },
      {
        id: 145,
        name: 'Zapdos',
        type: 'electric' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/145'
      },
      {
        id: 146,
        name: 'Moltres',
        type: 'fire' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/146'
      },
      {
        id: 147,
        name: 'Dratini',
        type: 'dragon',
        url: 'https://pokeapi.co/api/v2/pokemon/147'
      },
      {
        id: 148,
        name: 'Dragonair',
        type: 'dragon',
        url: 'https://pokeapi.co/api/v2/pokemon/148'
      },
      {
        id: 149,
        name: 'Dragonite',
        type: 'dragon' / 'flying',
        url: 'https://pokeapi.co/api/v2/pokemon/149'
      },
      {
        id: 150,
        name: 'Mewtwo',
        type: 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/150'
      },
      {
        id: 151,
        name: 'Mew',
        type: 'psychic',
        url: 'https://pokeapi.co/api/v2/pokemon/151'
      }
    ]
    const effectivePokemons = availablePokemons.filter(pokemon => {
      return types.includes(pokemon.type)
    })
    let selectedPokemon
    if (effectivePokemons.length > 0) {
      const randomIndex = Math.floor(Math.random() * effectivePokemons.length)
      selectedPokemon = effectivePokemons[randomIndex]
    } else {
      const randomIndex = Math.floor(Math.random() * availablePokemons.length)
      selectedPokemon = availablePokemons[randomIndex]
    }
    return selectedPokemon
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
