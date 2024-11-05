/* fetch('index.json')
    .then((response) => response.json()) //ta bort detta?
    .then((result) => {
        console.log(result);
    }); */

// URL till JSON-data
const apiUrl = 'index.json';

// Funktion för att hämta data och skapa kort
async function fetchAndDisplayCards() {
    try {
        // Hämta data från JSON-url
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Hitta container där korten ska visas
        const container = document.getElementById('cards-container');

        // Gå igenom varje parfym och skapa kort för varje
        data.forEach((item) => {
            // Skapa en div för kortet
            const card = document.createElement('div');
            card.className = 'col-md-4 mb-4'; // Bootstrap-klasser för layout

            // Fyll kortet med parfymens namn och doftnoter
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.parfym}</h5>
                        <p class="card-text">${item.doftnot}</p>
                    </div>
                </div>
            `;

            // Lägg till kortet i container
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error); // Om något går fel
    }
}

// Kör funktionen när sidan laddas
document.addEventListener('DOMContentLoaded', fetchAndDisplayCards);
