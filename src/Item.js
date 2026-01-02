const Menu = require("./menu")
const start = require("./start")
class Item {
    constructor(name, quantity, pricePerItem) {
        this.name = name
        this.quantity = quantity
        this.pricePerItem = pricePerItem
    }

    addItem() {
        console.log(`Added ${this.quantity} ${this.name} at $${this.pricePerItem} each to your shopping list!`)
    }

    removeItem() {
        // splice item out of itemList
        // console.log(`Removed ${itemNumR} ${itemNameR} from your shopping list!`)
    }

    viewItem() {
        return `- ${this.quantity} ${this.name}: $${this.pricePerItem}`
    }

    totalPrice() {
        return this.quantity * this.pricePerItem
    }
}

module.exports = Item




