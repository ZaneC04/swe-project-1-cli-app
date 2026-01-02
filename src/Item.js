const Menu = require("./menu")
const start = require("./start")
class Item {
    constructor(name, quantity, pricePerItem) {
        this.name = name
        this.quantity = quantity
        this.pricePerItem = pricePerItem
    }
    addItem() {
        console.log(`Added ${this.quantity} ${this.name} at $${Number(this.pricePerItem).toFixed(2)} each to your shopping list!`)
    }

    removeItem(num) {
        this.quantity -= num
    }

    viewItem() {
        console.log(`- ${this.quantity} ${this.name}: $${Number(this.pricePerItem).toFixed(2)}`);
    }

    totalPrice() {
        return this.quantity * this.pricePerItem
    }
}

module.exports = Item




