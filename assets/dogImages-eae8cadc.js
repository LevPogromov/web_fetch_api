import{c as o}from"./styles-96c523e1.js";const a=document.getElementById("app");a.innerHTML=`
  ${o()}
  <h1>Случайные изображения собак</h1>
  <button id="fetchDogImage">Получить изображение собаки</button>
  <div id="imageContainer" class="card"></div>
`;document.getElementById("fetchDogImage").addEventListener("click",i);async function i(){try{const e=await(await fetch("https://random.dog/woof.json")).json(),n=document.getElementById("imageContainer");e.url.toLowerCase().endsWith(".mp4")?n.innerHTML=`
        <video controls width="400">
          <source src="${e.url}" type="video/mp4">
          Ваш браузер не поддерживает видео тег.
        </video>
      `:n.innerHTML=`<img src="${e.url}" alt="Random dog" />`}catch(t){document.getElementById("imageContainer").innerHTML=`
      <p style="color: red;">Ошибка при загрузке изображения: ${t.message}</p>
    `}}
