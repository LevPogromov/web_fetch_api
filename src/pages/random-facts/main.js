import { createNavigation } from '../../shared/navigation.js'
import '../../shared/styles.css'

const app = document.getElementById('app')

app.innerHTML = `
  ${createNavigation()}
  <h1>Случайные факты</h1>
  <button id="fetchFact">Получить случайный факт</button>
  <div id="factContainer" class="card"></div>
`

document.getElementById('fetchFact').addEventListener('click', fetchRandomFact)

async function fetchRandomFact() {
  const container = document.getElementById('factContainer')
  container.innerHTML = '<p class="loading">Загрузка...</p>'
  
  try {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    const data = await response.json()
    container.innerHTML = `
      <p><strong>Факт:</strong> ${data.text}</p>
      <p><em>Источник: ${data.source}</em></p>
    `
  } catch (error) {
    container.innerHTML = `
      <p class="error">Ошибка при загрузке факта: ${error.message}</p>
    `
  }
}