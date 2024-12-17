export class PriceData {
    constructor(ttcPrice, taxRate) {
        this.ttcPrice = ttcPrice;
        this.taxRate = taxRate;
        this.htPrice = this.calculateHT();
        this.taxAmount = this.calculateTaxAmount();
    }

    calculateHT() {
        return this.ttcPrice / (1 + this.taxRate / 100);
    }

    calculateTaxAmount() {
        return this.ttcPrice - this.htPrice;
    }
}
