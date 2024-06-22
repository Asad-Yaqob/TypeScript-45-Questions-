//Exercise # 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Shabana";
//To print in LowerCase ..
console.log(personName.toLowerCase());
//To print in UpperCase ..
console.log(personName.toUpperCase());
//To print in TitleCase ..
function ToTitleCase(str) {
    var str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(ToTitleCase(personName));
