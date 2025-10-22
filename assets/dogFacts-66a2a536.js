import{c}from"./styles-cd6eed05.js";const d=document.getElementById("app");d.innerHTML=`
  ${c()}
  <h1>Факты о собаках</h1>
  <div style="margin-bottom: 20px;">
    <button id="fetchSingleFact">Получить один факт</button>
    <button id="fetchMultipleFacts">Получить несколько фактов</button>
    <button id="fetchBreeds">Получить информацию о породах</button>
  </div>
  <div id="factContainer" class="card"></div>
`;document.getElementById("fetchSingleFact").addEventListener("click",()=>s(1));document.getElementById("fetchMultipleFacts").addEventListener("click",()=>s(3));document.getElementById("fetchBreeds").addEventListener("click",p);async function s(a=1){const t=document.getElementById("factContainer");t.innerHTML='<p class="loading">Загрузка фактов о собаках...</p>';try{const n=await fetch(`https://dogapi.dog/api/v2/facts?limit=${a}`);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const i=await n.json();if(i.data&&i.data.length>0){let r="<h3>Факты о собаках:</h3>";i.data.forEach((o,e)=>{r+=`<p><strong>Факт ${e+1}:</strong> ${o.attributes.body}</p>`}),t.innerHTML=r}else t.innerHTML='<p class="error">Не удалось получить факты о собаках</p>'}catch(n){t.innerHTML=`
      <p class="error">Ошибка при загрузке фактов: ${n.message}</p>
    `}}async function p(){const a=document.getElementById("factContainer");a.innerHTML='<p class="loading">Загрузка информации о породах...</p>';try{const t=await fetch("https://dogapi.dog/api/v2/breeds?page[limit]=5");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await t.json();if(n.data&&n.data.length>0){let i="<h3>Информация о породах собак:</h3>";n.data.forEach((r,o)=>{const e=r.attributes;i+=`
          <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
            <p><strong>Порода ${o+1}: ${e.name}</strong></p>
            <p><em>Описание:</em> ${e.description||"Нет описания"}</p>
            <p><em>Продолжительность жизни:</em> ${e.life.min||"?"} - ${e.life.max||"?"} лет</p>
            <p><em>Вес:</em> ${e.male_weight.min||"?"} - ${e.male_weight.max||"?"} кг (кобель)</p>
            <p><em>Вес:</em> ${e.female_weight.min||"?"} - ${e.female_weight.max||"?"} кг (сука)</p>
          </div>
        `}),a.innerHTML=i}else a.innerHTML='<p class="error">Не удалось получить информацию о породах</p>'}catch(t){a.innerHTML=`
      <p class="error">Ошибка при загрузке информации о породах: ${t.message}</p>
    `}}s(1);
