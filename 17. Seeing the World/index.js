var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Think of at least five places in the world you’d like to visit.
var myPlaces = ["Tokyo", "Skardu", "NewYork", "Dubai", "Switzerland"];
//Print your array in its original order.
console.log("Original order: ", myPlaces);
//Print your array in alphabetical order.
var alphaOrder = __spreadArray([], myPlaces, true).sort();
console.log("Alphabetical order: ", alphaOrder);
// Show that your array is still in its original order by printing it.
console.log("Original order: ", myPlaces);
// Print your array in reverse alphabetical order 
var reverseAlphaOrder = __spreadArray([], myPlaces, true).sort().reverse();
console.log("Reverse alphabatical order: ", reverseAlphaOrder);
//Show that your array is still in its original order by printing it again.
console.log("Original order: ", myPlaces);
//Reverse the order of your list. 
myPlaces.reverse();
console.log("Reversed order: ", myPlaces);
//Reverse the order of your list again. 
myPlaces.reverse();
console.log("Reversed order: ", myPlaces);
//Sort your array so it’s stored in alphabetical order. 
myPlaces.sort();
console.log("Alphabatical order: ", myPlaces);
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
myPlaces.reverse();
console.log("Reverse alphabatical order: ", myPlaces);
