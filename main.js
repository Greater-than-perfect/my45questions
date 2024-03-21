"use strict";
// My Name Is: Waqas Ur Rehman holding cnic no: 42101-6261141-1 
// My Timing every Friday 2:00 pm to 5:00 pm 
// my Roll No: 00417911
//
console.log("*".repeat(70));
console.log("Answer no 1:-");
console.log("Installed Node.js, TypeScript and VS Code in my computer");
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 2:-");
let personName = "waqas";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 3:-");
console.log("lowecase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("uppercase:", personName.replace(/\bw/g, c => c.toUpperCase()));
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 4:-");
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 5:-");
let famousPerson = "Albert Einstein";
let message = `${famousPerson} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 6:-");
let personName1 = "   Waqas ur rehman   \t\n";
console.log(personName1);
personName1 = personName1.trim();
console.log(personName1);
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 7:-");
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 8:-");
console.log(5 + 3);
console.log("-".repeat(90));
console.log(10 - 2);
console.log("-".repeat(90));
console.log(4 * 2);
console.log("_".repeat(90));
console.log(16 / 2);
console.log("_".repeat(90));
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 9:-");
let favoriteNumber = 7;
console.log(`My favorite number is: ${favoriteNumber}`);
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 10:-");
// personalMessage.ts
// Written by waqas ur rehmam on 18th march 2024
// This program stores a person's name in a variable and prints a personalized message to that person.
let personName2 = "waqas ur rehman";
console.log(`Hello ${personName2}, would you like to learn some Python today?`);
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 11:-");
let names = ["Tayyab", "Asif", "Waqas", "Abdul Rehman", "Haziq"];
let i = 0;
i < names.length;
i++;
console.log(names[i]);
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 12:-");
names.forEach((names) => console.log(`Hello, ${names}, I hope you're doing well.`));
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 13:-");
let transportation = ["car", "bicycle", "motorcycle"];
transportation.forEach((vehicle) => console.log(`I would like to own a ${vehicle}.`));
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 14:-");
let dinnerGuests = ["sajid", "Asif", "Siraj"];
dinnerGuests.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner.`));
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 15:-");
let unableToAttend = dinnerGuests.shift();
console.log(`${unableToAttend} can't make it to the dinner.`);
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 16:-");
let newGuest = "Muhammad Tayyab";
dinnerGuests.push(newGuest);
dinnerGuests.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner.`));
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 17:-");
dinnerGuests.push("Muhammad Haris");
dinnerGuests.push("Saad Sadi");
dinnerGuests.push("Adil");
dinnerGuests.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner.`));
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 18:-");
dinnerGuests.length > 2;
let removedGuest = dinnerGuests.pop();
console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
dinnerGuests.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner.`));
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 19:-");
let placesToVisit = ["saudia arab", "turkey", "pakistan", "china", "dubai"];
console.log(placesToVisit.join(", "));
console.log(placesToVisit.sort().join(", "));
console.log(placesToVisit.join(", "));
console.log(placesToVisit.reverse().join(", "));
console.log(placesToVisit.join(", "));
placesToVisit.reverse();
console.log(placesToVisit.join(", "));
placesToVisit.sort();
console.log(placesToVisit.join(", "));
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log(placesToVisit.join(", "));
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 20:-");
console.log(`We are inviting ${dinnerGuests.length} people to dinner.`);
//
console.log("");
console.log("*".repeat(70));
console.log("Answer no 21:-");
