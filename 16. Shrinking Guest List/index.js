/* You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
var myGuests = ["Abdul Samad", "Sana", "Ahtisham"];
myGuests.unshift("Abdul Qadir");
var middleGuest = "Ahmad";
var middleIndex = Math.floor(myGuests.length / 2);
myGuests.splice(middleIndex, 0, middleGuest);
myGuests.push("Azeem");
//prints a message saying that you can invite only two people for dinner.
console.log("Unfortunatly, The dinner table has space for two people :( ");
//removes guests from your list one at a time until only two names remain in your list.
while (myGuests.length > 2) {
    var removedGuests = myGuests.pop();
    console.log("Sorry ".concat(removedGuests, " maybe next time."));
}
//prints a message to each of the two people still on your list, letting them know they’re still invited.
myGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you are still invited to dinner!"));
});
myGuests.splice(0, myGuests.length);
console.log(myGuests);
