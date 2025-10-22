import{c as a}from"./styles-cd6eed05.js";const c=document.getElementById("app");c.innerHTML=`
  ${a()}
  <h1>Случайные факты</h1>
  <button id="fetchFact">Получить случайный факт</button>
  <div id="factContainer" class="card"></div>
`;document.getElementById("fetchFact").addEventListener("click",s);async function s(){const t=document.getElementById("factContainer");t.innerHTML='<p class="loading">Загрузка...</p>';try{const n=await(await fetch("https://uselessfacts.jsph.pl/random.json?language=en")).json();t.innerHTML=`
      <p><strong>Факт:</strong> ${n.text}</p>
      <p><em>Источник: ${n.source}</em></p>
    `}catch(e){t.innerHTML=`
      <p class="error">Ошибка при загрузке факта: ${e.message}</p>
    `}}
