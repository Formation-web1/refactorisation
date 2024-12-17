export function validateInputs(priceTTC, taxRate) {
    if (isNaN(priceTTC) || isNaN(taxRate) || priceTTC <= 0 || taxRate < 0) {
        alert('Veuillez entrer des valeurs valides.');
        return false;
    }
    return true;
}
