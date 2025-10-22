export function createNavigation() {
    return `
      <nav style="margin: 20px 0; padding: 10px; background: #f5f5f5; border-radius: 8px;">
        <a href="/web_fetch_api/" style="margin: 0 10px; text-decoration: none; color: #333;">Главная</a> | 
        <a href="/web_fetch_api/src/pages/random-facts/" style="margin: 0 10px; text-decoration: none; color: #333;">Случайные факты</a> | 
        <a href="/web_fetch_api/src/pages/dog-facts/" style="margin: 0 10px; text-decoration: none; color: #333;">Факты о собаках</a> | 
        <a href="/web_fetch_api/src/pages/dog-images/" style="margin: 0 10px; text-decoration: none; color: #333;">Изображения собак</a>
      </nav>
    `
  }