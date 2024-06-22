//Question: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let myOwnArray = ["Bike", "Aeroplane","Car"];

for (let i = 0; i < myOwnArray.length; i++) {
    const transportation = myOwnArray[i];
    console.log(`My favorite mode of transportations is ${transportation}`);
}