//Question: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let  myFriendNames = ["Abdul Samad", "Zaid", "Faisal", "Rohaan", "Moiz"];

for (let i = 0; i < myFriendNames.length; i++) {
    const element = myFriendNames[i];
    console.log(`Hello! ${element} How are you?`);
} 