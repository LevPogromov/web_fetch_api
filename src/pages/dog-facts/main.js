import { createNavigation } from '../../shared/navigation.js'
import '../../shared/styles.css'

const app = document.getElementById('app')

app.innerHTML = `
  ${createNavigation()}
  <h1>Факты о собаках</h1>
  <div style="margin-bottom: 20px;">
    <button id="fetchSingleFact">Получить один факт</button>
    <button id="fetchMultipleFacts">Получить несколько фактов</button>
    <button id="fetchBreeds">Получить информацию о породах</button>
  </div>
  <div id="factContainer" class="card"></div>
`

document.getElementById('fetchSingleFact').addEventListener('click', () => fetchDogFacts(1))
document.getElementById('fetchMultipleFacts').addEventListener('click', () => fetchDogFacts(3))
document.getElementById('fetchBreeds').addEventListener('click', fetchDogBreeds)

async function fetchDogFacts(count = 1) {
  const container = document.getElementById('factContainer')
  container.innerHTML = '<p class="loading">Загрузка фактов о собаках...</p>'
  
  try {
    const response = await fetch(`https://dogapi.dog/api/v2/facts?limit=${count}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.data && data.data.length > 0) {
      let html = `<h3>Факты о собаках:</h3>`
      data.data.forEach((fact, index) => {
        html += `<p><strong>Факт ${index + 1}:</strong> ${fact.attributes.body}</p>`
      })
      container.innerHTML = html
    } else {
      container.innerHTML = '<p class="error">Не удалось получить факты о собаках</p>'
    }
  } catch (error) {
    container.innerHTML = `
      <p class="error">Ошибка при загрузке фактов: ${error.message}</p>
    `
  }
}

async function fetchDogBreeds() {
  const container = document.getElementById('factContainer')
  container.innerHTML = '<p class="loading">Загрузка информации о породах...</p>'
  
  try {
    const response = await fetch('https://dogapi.dog/api/v2/breeds?page[limit]=5')
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.data && data.data.length > 0) {
      let html = `<h3>Информация о породах собак:</h3>`
      data.data.forEach((breed, index) => {
        const attributes = breed.attributes
        html += `
          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
            <p><strong>Порода ${index + 1}: ${attributes.name}</strong></p>
            <p><em>Описание:</em> ${attributes.description || 'Нет описания'}</p>
            <p><em>Продолжительность жизни:</em> ${attributes.life.min || '?'} - ${attributes.life.max || '?'} лет</p>
            <p><em>Вес:</em> ${attributes.male_weight.min || '?'} - ${attributes.male_weight.max || '?'} кг (кобель)</p>
            <p><em>Вес:</em> ${attributes.female_weight.min || '?'} - ${attributes.female_weight.max || '?'} кг (сука)</p>
          </div>
        `
      })
      container.innerHTML = html
    } else {
      container.innerHTML = '<p class="error">Не удалось получить информацию о породах</p>'
    }
  } catch (error) {
    container.innerHTML = `
      <p class="error">Ошибка при загрузке информации о породах: ${error.message}</p>
    `
  }
}

// Загрузим один факт при загрузке страницы
fetchDogFacts(1)