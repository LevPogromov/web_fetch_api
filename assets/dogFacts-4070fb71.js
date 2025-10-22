import{c as o}from"./styles-cd6eed05.js";const r=document.getElementById("app");r.innerHTML=`
  ${o()}
  <h1>Факты о собаках</h1>
  <button id="fetchDogFact">Получить факт о собаках</button>
  <div id="factContainer" class="card"></div>
`;document.getElementById("fetchDogFact").addEventListener("click",n);async function n(){const a=document.getElementById("factContainer");a.innerHTML='<p class="loading">Загрузка факта о собаках...</p>';try{const t=await fetch("https://dogapi.dog/api/v2/facts?limit=1");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const e=await t.json();e.data&&e.data.length>0?a.innerHTML=`
        <p>${e.data[0].attributes.body}</p>
      `:a.innerHTML='<p class="error">Не удалось получить факт о собаках</p>'}catch(t){a.innerHTML=`
      <p class="error">Ошибка при загрузке факта: ${t.message}</p>
    `}}n();
