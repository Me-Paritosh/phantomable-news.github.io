// JavaScript for the button functionality
function changeContent() {
    const newsUpdate = document.getElementById('newsUpdate');
    const newsArray = [
        "Breaking: Phantomable News reaches new heights in global audience!",
        "Local: New innovations in technology are changing the game!",
        "Global: Political shifts around the world bring new challenges.",
        "Trending: The environment takes center stage in global discussions."
    ];

    const randomNews = newsArray[Math.floor(Math.random() * newsArray.length)];
    newsUpdate.textContent = randomNews;
}
