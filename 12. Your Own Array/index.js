//Question: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var myOwnArray = ["Bike", "Aeroplane", "Car"];
for (var i = 0; i < myOwnArray.length; i++) {
    var transportation = myOwnArray[i];
    console.log("My favorite mode of transportations is ".concat(transportation));
}
