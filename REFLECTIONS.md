1. Share one aspect of building this project you found challenging and how you overcame it.

- One aspect of building this project that I found difficult was deciding on how to access my data across modules. For example, since I used an `Item` instance to store each item in the `Menu`, I struggled to correctly retrieve the properties from the instance. 
- The way I solved this was by creating methods I could then use in `Menu`, like `TotalPrice()` and `viewItem()` which were used in `Menu.menuView()`.

2. Share one technical concept that you gained a deeper understanding of through building this project. Explain that concept in simple terms and explain how it is used in your project.

- One concept I gained a deeper understanding of was higher order array methods, like `.map()`, `.reduce()`, and `.find()`.

- Higher order array methods (HOMs) are functions that can be called on arrays, and take in a call-back function to produce a result. In my project, I used HOMs like `.map()` and `.reduce()` in `Menu.menuView()` to first convert each `Item` instance into it's quantity/price. Then, I summed together the values to get the total price of the shopping list and the total quantity of all the items.  
