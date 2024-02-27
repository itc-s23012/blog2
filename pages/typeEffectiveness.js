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
    fairy: 1,
    grasspoison: 1,
    fireflying: 1,
    flyingbug: 1,
    poisonbug: 1,
    normalflying: 1,
    poisonground: 1,
    normalfairy: 1,
    poisonflying: 1,
    grassbug: 1,
    waterfighting: 1,
    waterpoison: 1,
    groundrock: 0.5,
    waterpsychic: 1,
    electricsteel: 0.5,
    waterice: 1,
    poisonghost: 0,
    grasspsychic: 1,
    psychicfairy: 1,
    icepsychic: 1,
    waterflying: 1,
    waterrock: 0.5,
    flyingrock: 0.5,
    iceflying: 1,
    electricflying: 1,
    flyingdragon: 1
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
    fairy: 1,
    grasspoison: 2.0,
    fireflying: 0.5,
    flyingbug: 2.0,
    poisonbug: 2.0,
    normalflying: 1,
    poisonground: 1,
    normalfairy: 1,
    poisonflying: 1,
    grassbug: 2.0,
    waterfighting: 0.5,
    waterpoison: 0.5,
    groundrock: 0.5,
    waterpsychic: 0.5,
    electricsteel: 2.0,
    waterice: 1,
    poisonghost: 1,
    grasspsychic: 1,
    psychicfairy: 1,
    icepsychic: 2.0,
    waterflying: 0.5,
    waterrock: 0.5,
    flyingrock: 0.5,
    iceflying: 2.0,
    electricflying: 1,
    flyingdragon: 0.5
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
    fairy: 1,
    grasspoison: 0.5,
    fireflying: 2.0,
    flyingbug: 1,
    poisonbug: 1,
    normalflying: 1,
    poisonground: 2.0,
    normalfairy: 1,
    poisonflying: 1,
    grassbug: 2.0,
    waterfighting: 0.5,
    waterpoison: 0.5,
    groundrock: 2.0,
    waterpsychic: 0.5,
    electricsteel: 1,
    waterice: 0.5,
    poisonghost: 1,
    grasspsychic: 2.0,
    psychicfairy: 1,
    icepsychic: 1,
    waterflying: 0.5,
    waterrock: 1,
    flyingrock: 2.0,
    iceflying: 1,
    electricflying: 1,
    flyingdragon: 0.5
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
    fairy: 1,
    grasspoison: 0.5,
    fireflying: 2.0,
    flyingbug: 2.0,
    poisonbug: 1,
    normalflying: 2.0,
    poisonground: 0,
    normalfairy: 1,
    poisonflying: 2.0,
    grassbug: 0,
    waterfighting: 2.0,
    waterpoison: 2.0,
    groundrock: 0,
    waterpsychic: 2.0,
    electricsteel: 0.5,
    waterice: 2.0,
    poisonghost: 1,
    grasspsychic: 0,
    psychicfairy: 1,
    icepsychic: 1,
    waterflying: 2.0,
    waterrock: 2.0,
    flyingrock: 2.0,
    iceflying: 2.0,
    electricflying: 1,
    flyingdragon: 1
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
    fairy: 1,
    grasspoison: 0.5,
    fireflying: 0.5,
    flyingbug: 0.5,
    poisonbug: 0.5,
    normalflying: 0.5,
    poisonground: 1,
    normalfairy: 1,
    poisonflying: 0.5,
    grassbug: 1,
    waterfighting: 2.0,
    waterpoison: 1,
    groundrock: 2.0,
    waterpsychic: 2.0,
    electricsteel: 0.5,
    waterice: 2.0,
    poisonghost: 0.5,
    grasspsychic: 2.0,
    psychicfairy: 1,
    icepsychic: 1,
    waterflying: 1,
    waterrock: 2.0,
    flyingrock: 1,
    iceflying: 0.5,
    electricflying: 0.5,
    flyingdragon: 0.5
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
    fairy: 1,
    grasspoison: 2.0,
    fireflying: 1,
    flyingbug: 2.0,
    poisonbug: 1,
    normalflying: 2.0,
    poisonground: 2.0,
    normalfairy: 1,
    poisonflying: 2.0,
    grassbug: 2.0,
    waterfighting: 0.5,
    waterpoison: 0.5,
    groundrock: 2.0,
    waterpsychic: 0.5,
    electricsteel: 0.5,
    waterice: 0.5,
    poisonghost: 1,
    grasspsychic: 2.0,
    psychicfairy: 1,
    icepsychic: 0.5,
    waterflying: 1,
    waterrock: 0.5,
    flyingrock: 2.0,
    iceflying: 1,
    electricflying: 2.0,
    flyingdragon: 2.0
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
    fairy: 0.5,
    grasspoison: 0.5,
    fireflying: 0.5,
    flyingbug: 0.5,
    poisonbug: 0.5,
    normalflying: 1,
    poisonground: 0.5,
    normalfairy: 1,
    poisonflying: 0.5,
    grassbug: 0.5,
    waterfighting: 1,
    waterpoison: 0.5,
    groundrock: 2.0,
    waterpsychic: 0.5,
    electricsteel: 2.0,
    waterice: 2.0,
    poisonghost: 0,
    grasspsychic: 0.5,
    psychicfairy: 0.5,
    icepsychic: 1,
    waterflying: 0.5,
    waterrock: 2.0,
    flyingrock: 1,
    iceflying: 1,
    electricflying: 0.5,
    flyingdragon: 0.5
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
    fairy: 2,
    grasspoison: 1,
    fireflying: 1,
    flyingbug: 1,
    poisonbug: 1,
    normalflying: 1,
    poisonground: 0.5,
    normalfairy: 2.0,
    poisonflying: 0.5,
    grassbug: 0.5,
    waterfighting: 1,
    waterpoison: 0.5,
    groundrock: 0.5,
    waterpsychic: 1,
    electricsteel: 0,
    waterice: 1,
    poisonghost: 0.5,
    grasspsychic: 0.5,
    psychicfairy: 2.0,
    icepsychic: 1,
    waterflying: 1,
    waterrock: 0.5,
    flyingrock: 0.5,
    iceflying: 1,
    electricflying: 1,
    flyingdragon: 1
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
    fairy: 1,
    grasspoison: 1,
    fireflying: 0,
    flyingbug: 0,
    poisonbug: 1,
    normalflying: 0,
    poisonground: 2.0,
    normalfairy: 1,
    poisonflying: 0,
    grassbug: 0.5,
    waterfighting: 1,
    waterpoison: 2.0,
    groundrock: 2.0,
    waterpsychic: 1,
    electricsteel: 2.0,
    waterice: 1,
    poisonghost: 2.0,
    grasspsychic: 1,
    psychicfairy: 1,
    icepsychic: 1,
    waterflying: 0,
    waterrock: 2.0,
    flyingrock: 0,
    iceflying: 0,
    electricflying: 0,
    flyingdragon: 0
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
    fairy: 1,
    grasspoison: 2.0,
    fireflying: 1,
    flyingbug: 2.0,
    poisonbug: 2.0,
    normalflying: 1,
    poisonground: 1,
    normalfairy: 1,
    poisonflying: 1,
    grassbug: 2.0,
    waterfighting: 2.0,
    waterpoison: 1,
    groundrock: 0.5,
    waterpsychic: 1,
    electricsteel: 0.5,
    waterice: 1,
    poisonghost: 1,
    grasspsychic: 1,
    psychicfairy: 1,
    icepsychic: 1,
    waterflying: 1,
    waterrock: 0.5,
    flyingrock: 0.5,
    iceflying: 1,
    electricflying: 0.5,
    flyingdragon: 1
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
    fairy: 1,
    grasspoison: 2.0,
    fireflying: 1,
    flyingbug: 1,
    poisonbug: 2.0,
    normalflying: 1,
    poisonground: 2.0,
    normalfairy: 1,
    poisonflying: 2.0,
    grassbug: 1,
    waterfighting: 2.0,
    waterpoison: 2.0,
    groundrock: 1,
    waterpsychic: 0.5,
    electricsteel: 0.5,
    waterice: 1,
    poisonghost: 2.0,
    grasspsychic: 0.5,
    psychicfairy: 0.5,
    icepsychic: 0.5,
    waterflying: 1,
    waterrock: 1,
    flyingrock: 1,
    iceflying: 1,
    electricflying: 1,
    flyingdragon: 1
  },
  bug: {
    normal: 1,
    fire: 0.5,
    water: 1,
    electric: 1,
    grass: 2.0,
    ice: 1,
    fighting: 0.5,
    poison: 0.5,
    ground: 1,
    flying: 0.5,
    psychic: 2.0,
    bug: 1,
    rock: 1,
    ghost: 0.5,
    dragon: 1,
    dark: 2.0,
    steel: 0.5,
    fairy: 0.5,
    grasspoison: 1,
    fireflying: 0.5,
    flyingbug: 0.5,
    poisonbug: 0.5,
    normalflying: 0.5,
    poisonground: 1,
    normalfairy: 0.5,
    poisonflying: 0.5,
    grassbug: 1,
    waterfighting: 0.5,
    waterpoison: 0.5,
    groundrock: 1,
    waterpsychic: 2.0,
    electricsteel: 0.5,
    waterice: 1,
    poisonghost: 0.5,
    grasspsychic: 2.0,
    psychicfairy: 1,
    icepsychic: 2.0,
    waterflying: 0.5,
    waterrock: 1,
    flyingrock: 0.5,
    iceflying: 0.5,
    electricflying: 0.5,
    flyingdragon: 0.5
  },
  rock: {
    normal: 1,
    fire: 2.0,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 2.0,
    fighting: 0.5,
    poison: 1,
    ground: 0.5,
    flying: 2.0,
    psychic: 1,
    bug: 2.0,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 1,
    grasspoison: 1,
    fireflying: 2.0,
    flyingbug: 2.0,
    poisonbug: 2.0,
    normalflying: 2.0,
    poisonground: 0.5,
    normalfairy: 1,
    poisonflying: 2.0,
    grassbug: 1,
    waterfighting: 0.5,
    waterpoison: 1,
    groundrock: 0.5,
    waterpsychic: 1,
    electricsteel: 0.5,
    warterice: 2.0,
    poisonghost: 1,
    grasspsychic: 0.5,
    psychicfairy: 1,
    icepsychic: 2.0,
    waterflying: 2.0,
    waterrock: 1,
    flyingrock: 2.0,
    iceflying: 2.0,
    electricflying: 2.0,
    flyingdragon: 2.0
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
    fairy: 1,
    grasspoison: 1,
    fireflying: 1,
    flyingbug: 1,
    poisonbug: 1,
    normalflying: 0,
    poisonground: 1,
    normalfairy: 0,
    poisonflying: 1,
    grassbug: 1,
    warterfighting: 1,
    waterpoison: 1,
    groundrock: 1,
    waterpsychic: 2.0,
    electricsteel: 1,
    waterice: 1,
    poisonghost: 2.0,
    grasspsychic: 2.0,
    psychicfairy: 2.0,
    icepsychic: 2.0,
    waterflying: 1,
    waterrock: 1,
    flyingrock: 1,
    iceflying: 1,
    electricflying: 1,
    flyingdragon: 1
  },
  dragon: {
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
    rock: 1,
    ghost: 1,
    dragon: 2.0,
    dark: 1,
    steel: 0.5,
    fairy: 0,
    grasspoison: 1,
    fireflying: 1,
    flyingbug: 1,
    poisonbug: 1,
    normalflying: 1,
    poisonground: 1,
    normalfairy: 0,
    poisonflying: 1,
    grassbug: 1,
    waterfighting: 1,
    waterpoison: 1,
    groundrock: 1,
    waterpsychic: 1,
    electricsteel: 0.5,
    waterice: 1,
    poisonghost: 1,
    grasspsychic: 1,
    psychicfairy: 0,
    icepsychic: 1,
    waterflying: 1,
    waterrock: 1,
    flyingrock: 1,
    iceflying: 1,
    electricflying: 1,
    flyingdragon: 2.0
  },
  dark: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 0.5,
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
    fairy: 0.5,
    grasspoison: 1,
    fireflying: 1,
    flyingbug: 1,
    poisonbug: 1,
    normalflying: 1,
    poisonground: 1,
    normalfairy: 0.5,
    poisonflying: 1,
    grassbug: 1,
    waterfighting: 0.5,
    waterpoison: 1,
    groundrock: 1,
    waterpsychic: 2.0,
    electricsteel: 1,
    waterice: 1,
    poisonghost: 2.0,
    grasspsychic: 2.0,
    psychicfairy: 1,
    icepsychic: 2.0,
    waterflying: 1,
    waterrock: 1,
    flyingrock: 1,
    iceflying: 1,
    electricflying: 1,
    flyingdragon: 1
  },
  steel: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    electric: 0.5,
    grass: 1,
    ice: 2.0,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 2.0,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 2.0,
    grasspoison: 1,
    fireflying: 0.5,
    flyingbug: 1,
    poisonbug: 1,
    normalflying: 1,
    poisonground: 1,
    normalfairy: 2.0,
    poisonflying: 1,
    grassbug: 1,
    waterfighting: 0.5,
    waterpoison: 0.5,
    groundrock: 2.0,
    waterpsychic: 0.5,
    electricsteel: 0.5,
    waterice: 1,
    poisonghost: 1,
    grasspsychic: 1,
    psychicfairy: 2.0,
    icepsychic: 2.0,
    waterflying: 0.5,
    waterrock: 1,
    flyingrock: 2.0,
    iceflying: 2.0,
    electricflying: 0.5,
    flyingdragon: 1
  },
  fairy: {
    normal: 1,
    fire: 0.5,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 2.0,
    poison: 0.5,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 2.0,
    dark: 2.0,
    steel: 0.5,
    fairy: 1,
    grasspoison: 0.5,
    fireflying: 0.5,
    flyingbug: 1,
    poisonbug: 0.5,
    normalflying: 1,
    poisonground: 0.5,
    normalfairy: 1,
    poisonflying: 0.5,
    grassbug: 1,
    waterfighting: 2.0,
    waterpoison: 0.5,
    groundrock: 1,
    waterpsychic: 1,
    electricsteel: 0.5,
    waterice: 1,
    poisonghost: 0.5,
    grasspsychic: 1,
    psychicfairy: 1,
    icepsychic: 1,
    waterflying: 1,
    waterrock: 1,
    flyingrock: 1,
    iceflying: 1,
    electricflying: 1,
    flyingdragon: 2.0
  }
}

export { typeEffectiveness }
