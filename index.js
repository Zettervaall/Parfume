/* fetch('index.json')
    .then((response) => response.json()) //ta bort detta?
    .then((result) => {
        console.log(result);
    }); */

// URL till json
const apiUrl = 'index.json';

// Funktion för att hämta data och skapa kort
async function fetchAndDisplayCards() {
    try {
        // Hämta data från json-fil
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Sökvägen till bilderna
        const basePath = '/Media/';

        // Hitta container där korten ska visas
        const container = document.getElementById('cards-container');

        // Gå igenom varje parfym och skapa kort för varje
        data.forEach((item) => {
            // Generera URL för bild om bild finns
            const imageUrl = item.bild ? basePath + item.bild : '';

            // Skapa en div för kortet
            const card = document.createElement('div');
            card.className = 'col'; // Bootstrap-klasser för layout

            // Fyll kortet med parfymens bild, namn och doftnoter
            card.innerHTML = `
                <div class="card h-100">
                    ${
                        imageUrl
                            ? `<img src="${imageUrl}" class="card-img-top" alt="${item.parfym} bild">`
                            : ''
                    }
                    <div class="card-body">
                        <h5 class="card-title"><strong>${
                            item.parfym
                        }</strong></h5>
                        <p class="card-text">${item.doftnot.join(', ')}</p>
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
