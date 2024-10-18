import { useState, useEffect } from 'react'
import { typeEffectiveness } from 'components/typeEffectiveness'
import { selectPokemonByType } from 'components/selectPokemon'

const Home = () => {
  const [opponentPokemonList, setOpponentPokemonList] = useState([])
  const [party, setParty] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleOpponentPokemonChange = async (event, index) => {
    const pokemonId = event.target.value
    if (pokemonId < 1 || pokemonId > 1000) {
      setErrorMessage('ポケモンIDは1から100の範囲で入力してください')
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

  useEffect(() => {
    formParty()
  }, [opponentPokemonList])

  const calculateTypeEffectiveness = (attackerType, defenderType) => {
    return typeEffectiveness[attackerType][defenderType]
  }

  const formParty = async () => {
    let selectedParty = []
    const seenPokemon = new Set() // 重複を防ぐためのセット
    for (const opponentPokemon of opponentPokemonList) {
      if (!opponentPokemon || !opponentPokemon.types) continue
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
      if (bestPokemon && !seenPokemon.has(bestPokemon.id)) {
        const japaneseName = await fetchPokemonJapaneseName(bestPokemon.id)
        const japaneseTypeName = await fetchTypeJapaneseName(bestPokemon.type)

        selectedParty.push({ ...bestPokemon, japaneseName, japaneseTypeName })
        seenPokemon.add(bestPokemon.id) // IDを追加
      }
    }
    selectedParty = selectedParty.slice(0, 5)
    setParty(selectedParty)
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
      <h2>パーティー</h2>
      <ul>
        {party.map((pokemon, index) => (
          <li key={index} className="pokemon-info">
            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.japaneseName}
              />
              <div>
                <p>
                  {`対戦相手ポケモン: ${opponentPokemonList[index]?.japaneseName || '不明'}`}
                </p>
                <p>{`パーティーポケモン: ${pokemon.japaneseName}`}</p>
                <p>{`タイプ: ${pokemon.japaneseTypeName}`}</p>
                <a
                  href={pokemon.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'blue', textAlign: 'center' }}
                >
                  詳細を見る
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

