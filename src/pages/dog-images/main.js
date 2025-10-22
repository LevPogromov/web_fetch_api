import { createNavigation } from '../../shared/navigation.js'
import '../../shared/styles.css'

const app = document.getElementById('app')

app.innerHTML = `
  ${createNavigation()}
  <h1>Случайные изображения собак</h1>
  <button id="fetchDogImage">Получить изображение собаки</button>
  <div id="imageContainer" class="card"></div>
`

document.getElementById('fetchDogImage').addEventListener('click', fetchDogImage)

async function fetchDogImage() {
  try {
    const response = await fetch('https://random.dog/woof.json')
    const data = await response.json()
    const imageContainer = document.getElementById('imageContainer')
    
    if (data.url.toLowerCase().endsWith('.mp4')) {
      imageContainer.innerHTML = `
        <video controls width="400">
          <source src="${data.url}" type="video/mp4">
          Ваш браузер не поддерживает видео тег.
        </video>
      `
    } else {
      imageContainer.innerHTML = `<img src="${data.url}" alt="Random dog" />`
    }
  } catch (error) {
    document.getElementById('imageContainer').innerHTML = `
      <p style="color: red;">Ошибка при загрузке изображения: ${error.message}</p>
    `
  }
}