// scripts/app.js
import { PriceData } from './models/PriceData.js'; // Import the PriceData class
import { validateInputs } from './helpers/validation.js'; // Import the validation function

// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Handle form submission
    document.getElementById('tva-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the input values from the form
        const priceTTC = parseFloat(document.getElementById('p').value);
        const taxRate = parseFloat(document.getElementById('tr').value);

        // Validate inputs
        if (!validateInputs(priceTTC, taxRate)) {
            return;
        }

        // Create a new PriceData instance with the user inputs
        const priceData = new PriceData(priceTTC, taxRate);

        // Display the calculated results in the 'results' section
        const resultsSection = document.getElementById('results');
        resultsSection.innerHTML = `
            <p><strong>Prix HT :</strong> ${priceData.htPrice.toFixed(2)} €</p>
            <p><strong>Part TVA :</strong> ${priceData.taxAmount.toFixed(2)} €</p>
            <p><strong>Prix TTC :</strong> ${priceData.ttcPrice.toFixed(2)} €</p>
        `;
    });
});
