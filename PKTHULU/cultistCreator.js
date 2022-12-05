// Character Creator
var maxPoints = 30;
var remPoints = maxPoints;
var maxScore = 13;
var age;
var grade;
var lore;
var sanity;
var physED;
var trash;
var chName;
// Calculate age
age = Math.floor(Math.random() * (16 - 5) + 5);
grade = age - 4;
console.log(grade + "," + age);
remPoints = remPoints - grade;
console.log("Points: " + remPoints);
lore = Math.floor(Math.random() * (12 - 1) + 1);
console.log("pokethulu Lore: " + lore);
remPoints = remPoints - lore;
console.log("Points: " + remPoints);
// rule 3
if (lore > grade) {
    sanity = Math.floor(Math.random() * ((13 - lore) - 1) + 1);
    console.log("Lore, Sanity: " + sanity);
}
else {
    sanity = Math.floor(Math.random() * ((13 - grade) - 1) + 1);
    console.log("Grade, Sanity: " + sanity);
}
remPoints = remPoints - sanity;
console.log("Points: " + remPoints);
physED = Math.floor(Math.random() * (12 - 1) + 1);
remPoints = remPoints - physED;
console.log("PhysED, Points: " + physED + "," + remPoints);
trash = Math.floor(Math.random() * (12 - 1) + 1);
remPoints = remPoints - trash;
console.log("Trash, Points: " + trash + "," + remPoints);
