function showResource(category) {
    const main = document.querySelector('#container');
    main.innerHTML = '';

    const resource = resources.find(r => r.category.toLowerCase() === category.toLowerCase());
    if (resource) {
        const article = document.createElement('article');
        article.innerHTML = `
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
            <ul>${resource.sources.map(({ title, url }) => `<li><a href="${url}" target="_blank">${title}</a></li>`).join('')}</ul>
        `;
        main.appendChild(article);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showResource('HTML');
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showResource(event.target.textContent);
        });
    });
});
