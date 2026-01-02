const Item = require('./Item');
const prompt = require('prompt-sync')({ sigint: true });

class Menu {
    isRunning = false;
    constructor(name) {
        this.name = name
        this.list = [];
    }

    showMenu() {
        this.isRunning = true
        while (this.isRunning) {
            console.log('Menu:');
            console.log('1. Add Item');
            console.log('2. Remove Item');
            console.log('3. View List');
            console.log('4. Exit\n');

            const menuChoice = prompt('Choose an option (1-4): ').trim();
            if (menuChoice === '1') {
                const itemName = prompt('Enter item name: ');
                const itemNum = prompt('Enter item quantity: ')
                const itemPrice = prompt(`Enter price per item: `)
                const newItem = new Item(itemName, itemNum, itemPrice)
                this.list.push(newItem)
                newItem.addItem()
            } else if (menuChoice === '2') {
                while (menuChoice === '2') {
                    const removeItemName = prompt('Enter item name to remove: ');
                    const removedItem = this.list.find(item => item.name.toUpperCase() === removeItemName.toUpperCase())
                    if (!removedItem) {
                        console.log(`invalid item name. Please try again.`)
                        break;
                    }
                    const removeItemNum = prompt(`Enter quantity to remove: `);
                    if (removeItemNum >= removedItem.quantity) {
                        console.log(`removed all ${removedItem.name} from your shopping list!`)
                        this.list.splice(this.list.indexOf(removedItem), 1)
                        break;
                    } else {
                        console.log(`removed ${removeItemNum} ${removedItem.name} from your shopping list!`)
                        removedItem.removeItem(removeItemNum)
                        break;
                    }
                }
            } else if (menuChoice === '3') {
                console.log(`${this.name}'s Shopping List:`)
                this.list.forEach(item => item.viewItem())
                const totalItems = this.list
                    .map(item => Number(item.quantity))
                    .reduce((acc, val) => acc + val, 0)
                const totalPrice = this.list
                    .map(item => Number(item.totalPrice()))
                    .reduce((acc, val) => acc + val, 0)
                console.log(`Total Items: ${totalItems}`)
                console.log(`Total Price: $${totalPrice.toFixed(2)}`)
            } else if (menuChoice === '4') {
                this.isRunning = false;
            } else {
                console.log('Invalid option, try again.');
            }

            prompt('\nPress Enter to continue...');
            console.clear();
        }
    }
};

module.exports = Menu