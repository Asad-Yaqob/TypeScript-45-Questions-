//Question: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var myFriendNames = ["Abdul Samad", "Zaid", "Faisal", "Rohaan", "Moiz"];
for (var i = 0; i < myFriendNames.length; i++) {
    var element = myFriendNames[i];
    console.log("Hello! ".concat(element, " How are you?"));
}
