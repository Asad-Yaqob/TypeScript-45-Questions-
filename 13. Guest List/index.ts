//Question: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

export let myGuests = ["Abdul Samad", "Sana", "Rohaan"];

for(let i = 0; i < myGuests.length; i++){
const guest = myGuests[i];
console.log(`Hey ${guest}, Im arranging a dinner at my place on Saturday and your specially invited. Don't be late! `);
}