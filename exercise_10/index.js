//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var myFriendNames = ["Abdul Samad", "Zaid", "Faisal", "Rohaan", "Moiz"];
// for(let i = 0; i < myFriendNames.length; i++){
//     console.log(`My friend name is: ${myFriendNames[i]}`);
// }
console.log(myFriendNames.map(function (name) {
    return "Name of my friend is: ".concat(name);
}));
