import { useState, useEffect } from 'react'
import { typeEffectiveness } from 'components/typeEffectiveness'
import { selectPokemonByType } from 'components/selectPokemon'

const Home = () => {
  const [opponentPokemonList, setOpponentPokemonList] = useState([])
  const [party, setParty] = useState([])
  const [partyCandidates, setPartyCandidates] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleOpponentPokemonChange = async (event, index) => {
    const pokemonId = event.target.value
    if (pokemonId < 1 || pokemonId > 1000) {
      setErrorMessage('ポケモンIDは1から1000の範囲で入力してください')
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      if (!response.ok) {
        throw new Error('ポケモンが見つかりません')
      }
      const data = await response.json()
      const japaneseName = await fetchPokemonJapaneseName(data.id)

      setOpponentPokemonList(prevList => {
        const updatedList = [...prevList]
        updatedList[index] = { ...data, japaneseName }
        return updatedList
      })
      setErrorMessage('')
    } catch (error) {
      console.error('エラー:', error.message)
      setErrorMessage('ポケモンが見つかりませんでした')
    } finally {
      setLoading(false)
    }
  }

  const fetchPokemonJapaneseName = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      if (!response.ok) {
        throw new Error('日本語名を取得できませんでした')
      }
      const speciesData = await response.json()
      const japaneseNameEntry = speciesData.names.find(name => name.language.name === 'ja')
      return japaneseNameEntry ? japaneseNameEntry.name : '不明'
    } catch (error) {
      console.error('エラー:', error.message)
      return '不明'
    }
  }

  const fetchTypeJapaneseName = async (typeName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
      if (!response.ok) {
        throw new Error('タイプ名を取得できませんでした')
      }
      const typeData = await response.json()
      const japaneseNameEntry = typeData.names.find(name => name.language.name === 'ja')
      return japaneseNameEntry ? japaneseNameEntry.name : '不明'
    } catch (error) {
      console.error('エラー:', error.message)
      return '不明'
    }
  }

  const fetchPokemonStats = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      if (!response.ok) {
        throw new Error('ステータス情報を取得できませんでした')
      }
      const data = await response.json()
      return {
        id: data.id,
        stats: data.stats,
        types: data.types.map(typeInfo => typeInfo.type.name),
        japaneseName: await fetchPokemonJapaneseName(data.id),
      }
    } catch (error) {
      console.error('エラー:', error.message)
      return null
    }
  }

  useEffect(() => {
    if (opponentPokemonList.length > 0) {
      formPartyCandidates()
    }
  }, [opponentPokemonList])

  const calculateTypeEffectiveness = (attackerType, defenderType) => {
    return typeEffectiveness[attackerType][defenderType]
  }

  const formPartyCandidates = async () => {
    let candidates = []
    const seenPokemon = new Set()

    for (const opponentPokemon of opponentPokemonList) {
      if (!opponentPokemon || !opponentPokemon.types) continue
      let possiblePokemons = []

      // 相手ポケモンの攻撃と特攻ステータスを取得
      const attackStat = opponentPokemon.stats.find(stat => stat.stat.name === 'attack').base_stat
      const specialAttackStat = opponentPokemon.stats.find(stat => stat.stat.name === 'special-attack').base_stat

      const opponentFocus = attackStat > specialAttackStat ? 'attack' : 'special-attack'

      for (const type of Object.keys(typeEffectiveness)) {
        const effectiveness = calculateTypeEffectiveness(
            type,
            opponentPokemon.types[0].type.name.toLowerCase()
        )
        if (effectiveness > 1) {
          const bestPokemon = selectPokemonByType(type)
          const statsData = await fetchPokemonStats(bestPokemon.id)

          if (statsData && !seenPokemon.has(statsData.id)) {
            // 相手が物理攻撃が強いなら防御が高いポケモンを優先
            if (opponentFocus === 'attack') {
              const defenseStat = statsData.stats.find(stat => stat.stat.name === 'defense').base_stat
              possiblePokemons.push({ ...statsData, effectiveness, defense: defenseStat })
            }
            // 相手が特殊攻撃が強いなら特防が高いポケモンを優先
            else {
              const specialDefenseStat = statsData.stats.find(stat => stat.stat.name === 'special-defense').base_stat
              possiblePokemons.push({ ...statsData, effectiveness, specialDefense: specialDefenseStat })
            }
            seenPokemon.add(statsData.id)
          }
        }
      }

      // 優先度: 相手の攻撃方法（物理か特殊）に応じて、防御か特防の高い順に並べ替え
      if (opponentFocus === 'attack') {
        possiblePokemons.sort((a, b) => b.defense - a.defense)
      } else {
        possiblePokemons.sort((a, b) => b.specialDefense - a.specialDefense)
      }

      candidates.push(possiblePokemons)
    }
    setPartyCandidates(candidates)
  }

  const handleSelectPokemon = (index, selectedPokemon) => {
    setParty(prevParty => {
      const updatedParty = [...prevParty]
      updatedParty[index] = selectedPokemon
      return updatedParty
    })
  }

  return (
      <div>
        <h1>ポケモンパーティー形成</h1>
        <p>5匹の対戦相手のポケモンを選択してください。</p>
        <div>
          {[1, 2, 3, 4, 5].map(index => (
              <div key={index}>
                <label htmlFor={`opponentPokemon${index}`}>
                  {`対戦相手ポケモン ${index} のIDを入力:`}
                </label>
                <input
                    type='number'
                    id={`opponentPokemon${index}`}
                    onChange={event => handleOpponentPokemonChange(event, index - 1)}
                />
              </div>
          ))}
        </div>
        {loading && <p>ロード中...</p>}
        <h2>エラーメッセージ: {errorMessage}</h2>
        <h2>パーティー候補</h2>
        {partyCandidates.map((candidates, index) => (
            <div key={index}>
              <h3>{`対戦相手 ${index + 1} に対する候補`}</h3>
              <ul>
                {candidates.map(candidate => (
                    <li key={candidate.id}>
                      <img
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${candidate.id}.png`}
                          alt={candidate.japaneseName}
                      />
                      <p>{`ポケモン: ${candidate.japaneseName}`}</p>
                      <p>{`ステータス: ${candidate.stats.map(stat => stat.base_stat).join(', ')}`}</p>
                      <p>{`効果: ${candidate.effectiveness}`}</p>
                      <button onClick={() => handleSelectPokemon(index, candidate)}>選択</button>
                    </li>
                ))}
              </ul>
            </div>
        ))}
        <h2>選択されたパーティー</h2>
        <ul>
          {party.map((pokemon, index) => (
              <li key={index}>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    alt={pokemon.japaneseName}
                />
                <p>{`ポケモン: ${pokemon.japaneseName}`}</p>
              </li>
          ))}
        </ul>
      </div>
  )
}

export default Home
