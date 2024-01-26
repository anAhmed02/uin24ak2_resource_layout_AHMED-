//
function showResource(category) {
    const main = document.querySelector('#container');
    main.innerHTML = '';
    // finne ressurser som passe de valgte kategoriene 
    const resource = resources.find(r => r.category.toLowerCase() === category.toLowerCase());
    if (resource) {
        const article = document.createElement('article');
        //denne koden lage en boks med informasjon om ressursene og viser den på nettsiden
        article.innerHTML = `
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
            <ul>${resource.sources.map(({ title, url }) => `<li><a href="${url}" target="_blank">${title}</a></li>`).join('')}</ul>
        `;
        main.appendChild(article);
    }
}
//Gjør at hele siden lastes opp på likt isteden for at du ser en helt hvit side før alt lastes inn
document.addEventListener('DOMContentLoaded', () => {
    showResource('HTML');
    //denne koden gjør at når du trykker på linkene blir du send rett inn istedenfor å åpne nye faner  
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            //vise ressursen basert på lenketeksten
            showResource(event.target.textContent);
        });
    });
});
