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
                newItem.addItem
            } else if (menuChoice === '2') {
                const RemoveItem = prompt('Enter item name to remove: ');
                const RemoveItemNum = prompt(`Enter quantity to remove: `)
                // removeItem()
            } else if (menuChoice === '3') {
                // viewList();;
            } else if (menuChoice === '4') {
                this.isRunning = false;
            } else {
                console.log('Invalid option, try again.');
            }

            prompt('\nPress Enter to continue...');
            console.clear();
        }
    }
    viewList() {
        // show all items in itemList by using forEach console log (for total price use price * quantity expression)
    }
};

module.exports = Menu