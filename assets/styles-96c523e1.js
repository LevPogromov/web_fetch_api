(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function c(){return`
      <nav style="margin: 20px 0; padding: 10px; background: #f5f5f5; border-radius: 8px;">
        <a href="/" style="margin: 0 10px; text-decoration: none; color: #333;">Главная</a> | 
        <a href="/src/pages/random-facts/" style="margin: 0 10px; text-decoration: none; color: #333;">Случайные факты</a> | 
        <a href="/src/pages/dog-facts/" style="margin: 0 10px; text-decoration: none; color: #333;">Факты о собаках</a> | 
        <a href="/src/pages/dog-images/" style="margin: 0 10px; text-decoration: none; color: #333;">Изображения собак</a>
      </nav>
    `}export{c};
