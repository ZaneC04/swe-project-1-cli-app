const Menu = require("./menu")
const prompt = require('prompt-sync')({ sigint: true });
let shoppingList;
const startApp = () => {
    const shoppingListName = prompt("Please input your name: ")
    shoppingList = new Menu(shoppingListName)
    console.clear();
    console.log(`Welcome to ${shoppingListName}'s Shopping List!\n`);
    shoppingList.showMenu();
    console.log("Thanks for your usage! See you next time!");
}

startApp();