// URL till JSON-filen
const apiUrl = 'index.json';

// funktion för att hämta data och skapa kort
async function fetchAndDisplayCards() {
    try {
        // hämta data från JSON-filen
        const response = await fetch(apiUrl);
        const data = await response.json();

        // sökväg till bilderna
        const basePath = '/Media/';

        // hämtar de olika kategoricontainrarna
        const floralContainer = document.getElementById('floral-container');
        const frutyContainer = document.getElementById('fruty-container');
        const spicyContainer = document.getElementById('spicy-container');
        const sweetContainer = document.getElementById('sweet-container');

        // gå igenom varje parfym och skapa kort för varje
        data.forEach((item) => {
            // skapar URL för bild om bild finns
            const imageUrl = item.bild ? basePath + item.bild : '';

            // skapar en div för kortet
            const card = document.createElement('div');
            card.className = 'col-md-3 mb-3';

            // kortens innehåll
            card.innerHTML = `
                <div class="card h-100" class="mobile-card">
                    ${
                        imageUrl
                            ? `<img src="${imageUrl}" class="card-img-top" alt="${item.parfym} bild" onerror="this.onerror=null; this.src='Media/Default.jpg'">`
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

            // lägg till kortet i rätt kategori
            if (item.kategori === 'floral') {
                floralContainer.appendChild(card);
            } else if (item.kategori === 'fruty') {
                frutyContainer.appendChild(card);
            } else if (item.kategori === 'spicy') {
                spicyContainer.appendChild(card);
            } else if (item.kategori === 'sweet') {
                sweetContainer.appendChild(card);
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error); // om något skulle gå fel
    }
}

// kör funktionen när sidan laddas
document.addEventListener('DOMContentLoaded', fetchAndDisplayCards);
