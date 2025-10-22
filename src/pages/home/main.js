import { createNavigation } from '../../shared/navigation.js'
import '../../shared/styles.css'

document.getElementById('app').innerHTML = `
  ${createNavigation()}
  <div class="card">
    <h1>Добро пожаловать в мультистраничное приложение!</h1>
    <p>Это приложение демонстрирует работу с различными API:</p>
    <ul>
      <li><strong>Случайные факты:</strong> Интересные и бесполезные факты</li>
      <li><strong>Факты о собаках:</strong> Узнайте что-то новое о собаках</li>
      <li><strong>Изображения собак:</strong> Милые фото и видео собак</li>
    </ul>
  </div>
`