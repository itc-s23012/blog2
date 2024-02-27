const axios = require('axios')

// SportradarのAPIキー
const API_KEY = process.env.API_KEY

// APIエンドポイント
const endpoint =
  'https://api.sportradar.com/basketball/trial/v7/en/games/2024-02-15/schedule.json'

// HTTPリクエストを送信してデータを取得
axios
  .get(endpoint, {
    params: {
      api_key: API_KEY
    }
  })
  .then(response => {
    // レスポンスから必要なデータを取り出す
    const games = response.data.games
    games.forEach(game => {
      console.log(`${game.home.name} vs ${game.away.name}: ${game.scheduled}`)
    })
  })
  .catch(error => {
    console.error('Error fetching NBA scores:', error)
  })
