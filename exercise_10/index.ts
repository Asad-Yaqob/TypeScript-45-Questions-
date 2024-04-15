//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let myFriendNames = ["Abdul Samad", "Zaid", "Faisal", "Rohaan", "Moiz"];

console.log(myFriendNames.map((name):string => {
    return `Name of my friend is: ${name}`;
})
);
