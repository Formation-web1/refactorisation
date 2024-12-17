import { PriceData } from './models/PriceData.js';
import { validateInputs } from './helpers/validation.js';

document.getElementById('tva-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const priceTTC = parseFloat(document.getElementById('p').value);
    const taxRate = parseFloat(document.getElementById('tr').value);

    if (!validateInputs(priceTTC, taxRate)) return;

    const priceData = new PriceData(priceTTC, taxRate);

    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = `
        <p><strong>Prix HT :</strong> ${priceData.htPrice.toFixed(2)} €</p>
        <p><strong>Part TVA :</strong> ${priceData.taxAmount.toFixed(2)} €</p>
        <p><strong>Prix TTC :</strong> ${priceData.ttcPrice.toFixed(2)} €</p>
    `;
});
