/* You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
 • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

let myGuests = ["Abdul Samad", "Sana", "Ahtisham"];

//informing people that you found a bigger dinner table.
console.log("Good news guys! the dinner table has space for more people");

//add new guest to start
myGuests.unshift("Abdul Qadir");

//add new guest to middle
let middleGuest = "Ahmad";
let middleIndex = Math.floor(myGuests.length / 2);
myGuests.splice(middleIndex, 0, middleGuest);

//add new guest to end
myGuests.push("Azeem");

myGuests.forEach(guest => {
    console.log(`Hey ${guest} all preprations are done for the dinner  and you are specially invited to dinner tonight. Don't be late! `);
})
