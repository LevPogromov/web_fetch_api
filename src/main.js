import { createNavigation } from './shared/navigation.js'
import './shared/styles.css'

document.getElementById('app').innerHTML = `
  ${createNavigation()}
  <h1>Главная страница</h1>
  <p>Перейдите по ссылкам выше для просмотра разных API данных</p>
`