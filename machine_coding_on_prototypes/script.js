//* Problem: Create an object repressenting a type of tea with properties for name, type, and caffeine content.
const tea = {
  name: "Lemon Tea",
  type: "Green",
  caffeine: "Low",
};

//* Problem: Access and print the name and type properties of the tea object
console.log(tea.name, tea.type);

//* Problem: Add a new property origin to the tea object.
tea.origin = "India";

//* Problem: Change the caffeine level of the tea object to "Medium"

tea.caffeine = "Medium";
//* Problem: Remove the type property from the tea object.

delete tea.type;
//* Problem: Check if the tea object has a property origin.

console.log("origin" in tea);

//* Problem: Use a for...in loop to print all properties of the tea object.
for (let key in tea) {
  console.log(`${key} : ${tea[key]}`);
}

//* Problem: Create a nested object representing different types of teas and their properties.

const nastedObject = {
  name: "Parvez",
  age: "26",
  address: {
    vill: "pachim dandirhat",
    town: "Basirhat",
    pin: 743412,
  },
};

//*Problem: Create a copy of the tea object

//*Problem: Add a custom method describe to the tea object that return a description string.

//*Problem: Merge two objects repressenting different teas into one.
