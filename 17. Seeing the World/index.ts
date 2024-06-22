
// Think of at least five places in the world you’d like to visit.
let myPlaces = ["Tokyo", "Skardu", "NewYork", "Dubai", "Switzerland"];

//Print your array in its original order.
console.log("Original order: ",myPlaces);

//Print your array in alphabetical order.
let alphaOrder = [...myPlaces].sort();
console.log("Alphabetical order: ",alphaOrder);

// Show that your array is still in its original order by printing it.
console.log("Original order: ",myPlaces);

// Print your array in reverse alphabetical order 
let reverseAlphaOrder = [...myPlaces].sort().reverse();
console.log("Reverse alphabatical order: ",reverseAlphaOrder);

//Show that your array is still in its original order by printing it again.
console.log("Original order: ",myPlaces);

//Reverse the order of your list. 
myPlaces.reverse();
console.log("Reversed order: ",myPlaces);

//Reverse the order of your list again. 
myPlaces.reverse();
console.log("Reversed order: ",myPlaces);

//Sort your array so it’s stored in alphabetical order. 
myPlaces.sort();
console.log("Alphabatical order: ",myPlaces);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
myPlaces.reverse();
console.log("Reverse alphabatical order: ",myPlaces);

