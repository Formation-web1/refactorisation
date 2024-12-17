// scripts/helpers/validation.js
function validateInputs(ttcPrice, taxRate) {
    if (isNaN(ttcPrice) || isNaN(taxRate) || ttcPrice <= 0 || taxRate < 0) {
        alert('Veuillez entrer des valeurs valides.');
        return false;
    }
    return true;
}