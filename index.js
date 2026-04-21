// Global-scope array with const
const burgers = ["Hamburger", "Cheeseburger"];

// Global-scope variable with let
let featuredDrink = "Strawberry Milkshake";

// Function that adds a new burger
function addBurger() {
  // Function-scoped variable
  const newBurger = "Flatburger";
  burgers.push(newBurger);
}

// Block scope example
if(true) {
  // Block-scoped variable
  const anotherNewBurger = "Maple Bacon Burger";
  burgers.push(anotherNewBurger);
}

// Function that changes the featured drink
function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}