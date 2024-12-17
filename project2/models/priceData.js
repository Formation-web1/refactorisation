// scripts/models/PriceData.js
class PriceData {
    constructor(ttcPrice, taxRate) {
        this.ttcPrice = ttcPrice;
        this.taxRate = taxRate;
        this.htPrice = this.calculateHT();
        this.taxAmount = this.calculateTax();
    }

    calculateHT() {
        return this.ttcPrice / (1 + this.taxRate / 100);
    }

    calculateTax() {
        return this.ttcPrice - this.htPrice;
    }
}
