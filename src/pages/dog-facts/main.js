import { createNavigation } from '../../shared/navigation.js'
import '../../shared/styles.css'

const app = document.getElementById('app')

app.innerHTML = `
  ${createNavigation()}
  <h1>Факты о собаках</h1>
  <button id="fetchDogFact">Получить факт о собаках</button>
  <div id="factContainer" class="card"></div>
`

document.getElementById('fetchDogFact').addEventListener('click', fetchDogFact)

async function fetchDogFact() {
  const container = document.getElementById('factContainer')
  container.innerHTML = '<p class="loading">Загрузка факта о собаках...</p>'
  
  try {
    const response = await fetch('https://dogapi.dog/api/v2/facts?limit=1')
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.data && data.data.length > 0) {
      container.innerHTML = `
        <p>${data.data[0].attributes.body}</p>
      `
    } else {
      container.innerHTML = '<p class="error">Не удалось получить факт о собаках</p>'
    }
  } catch (error) {
    container.innerHTML = `
      <p class="error">Ошибка при загрузке факта: ${error.message}</p>
    `
  }
}

fetchDogFact()