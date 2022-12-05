"use strict";
// Character Creator
var cultStats = new CultStats();
var listenHome = document.getElementById("homeInput").addEventListener('input', grabHome);
var listenType = document.getElementById("typeInput").addEventListener('input', grabType);
var listenAge = document.getElementById("ageInput").addEventListener('input', grabAge);
var listenGrade = document.getElementById("gradeInput").addEventListener('input', grabGrade);
var listenLore = document.getElementById("loreInput").addEventListener('input', grabLore);
var listenSanity = document.getElementById("sanityInput").addEventListener('input', grabSanity);
var listenTrash = document.getElementById("trashInput").addEventListener('input', grabTrash);
var listenShop = document.getElementById("shopInput").addEventListener('input', grabShop);
var listenPhys = document.getElementById("physInput").addEventListener('input', grabPhys);
var listenLuck = document.getElementById("luckyInput").addEventListener('input', grabLuck);
function grabHome() {
    cultStats.hometown = document.querySelector('#homeInput').value;
}
function grabType() {
    cultStats.type = document.querySelector('#typeInput').value;
}
function grabLuck() {
    cultStats.lucky = document.querySelector('#luckyInput').value;
}
function statCheck(val) {
    if (val > 12) {
        return 12;
    }
    else if (val < 1) {
        return 0;
    }
    else {
        return val;
    }
}
function grabLore() {
    cultStats.lore = statCheck(+document.querySelector('#loreInput').value);
    calcRemPoints();
}
function grabSanity() {
    cultStats.sanity = statCheck(+document.querySelector('#sanityInput').value);
    calcRemPoints();
}
function grabTrash() {
    cultStats.trash = statCheck(+document.querySelector('#trashInput').value);
    calcRemPoints();
}
function grabShop() {
    cultStats.shop = statCheck(+document.querySelector('#shopInput').value);
    calcRemPoints();
}
function grabPhys() {
    cultStats.physED = statCheck(+document.querySelector('#physInput').value);
    calcRemPoints();
}
function grabGrade() {
    cultStats.grade = statCheck(+document.querySelector('#gradeInput').value);
    calcRemPoints();
}
function grabAge() {
    cultStats.age = statCheck(document.querySelector('#ageInput').value);
    calcStat('grade');
}
function calcAge() {
    cultStats.age = RandomNum(16, 5);
    calcStat('grade');
}
function calcGrade() {
    if ((cultStats.age - 4) < 1) {
        cultStats.grade = 1;
    }
    else if ((cultStats.age - 4) > 12) {
        cultStats.grade = RandomNum(12, 1);
    }
    else {
        cultStats.grade = RandomNum((cultStats.age - 4), 1);
    }
    calcRemPoints();
}
function calcLore() {
    if (cultStats.points < 12) {
        if (cultStats.points == 0) {
            cultStats.lore = 1;
        }
        else {
            cultStats.lore = cultStats.points;
        }
    }
    else {
        cultStats.lore = RandomNum();
    }
    calcRemPoints();
}
// adhering to rule 3
function calcSanity() {
    if (cultStats.lore > cultStats.grade) {
        cultStats.sanity = RandomNum((13 - cultStats.lore));
    }
    else {
        cultStats.sanity = RandomNum((13 - cultStats.grade));
    }
    calcRemPoints();
}
function calcPhys() {
    if (cultStats.points < 12) {
        if (cultStats.points == 0) {
            cultStats.physED = 1;
        }
        else {
            cultStats.physED = cultStats.points;
        }
    }
    else {
        cultStats.physED = RandomNum();
    }
    calcRemPoints();
}
function calcTrash() {
    if (cultStats.points < 12) {
        if (cultStats.points == 0) {
            cultStats.trash = 1;
        }
        else {
            cultStats.trash = cultStats.points;
        }
    }
    else {
        cultStats.trash = RandomNum();
    }
    calcRemPoints();
}
function calcShop() {
    if (cultStats.points < 12) {
        if (cultStats.points == 0) {
            cultStats.shop = 1;
        }
        else {
            cultStats.shop = cultStats.points;
        }
    }
    else {
        cultStats.shop = RandomNum();
    }
    calcRemPoints();
}
function RandomNum(max, min) {
    if (typeof (max) == 'undefined') {
        if (cultStats.points > 11) {
            max = 12;
        }
        else {
            max = cultStats.points;
        }
    }
    if (typeof (min) == 'undefined') {
        min = 1;
    }
    return Math.floor(Math.random() * (max - min) + min);
}
function clearField(id) {
    var container = document.getElementById(id);
    container.previousElementSibling.value = currentValue(id);
    checkVisible(id);
    container.style.visibility = 'hidden';
    container.previousElementSibling.focus();
}
function calcStat(id) {
    checkVisible(id);
    switch (id) {
        case 'physED':
            calcPhys();
            break;
        case 'grade':
            calcGrade();
            break;
        case 'lore':
            calcLore();
            break;
        case 'trash':
            calcTrash();
            break;
        case 'shop':
            calcShop();
            break;
        case 'sanity':
            calcSanity();
            break;
        case 'age':
            calcAge();
            break;
    }
    setRandomValue(id);
}
function setRandomValue(id) {
    var container = document.getElementById(id);
    var output = currentValue(id);
    container.previousElementSibling.style.visibility = 'hidden';
    container.innerHTML = output;
}
function currentValue(addID) {
    var value;
    switch (addID) {
        case 'physED':
            value = cultStats.physED;
            break;
        case 'grade':
            value = cultStats.grade;
            break;
        case 'lore':
            value = cultStats.lore;
            break;
        case 'trash':
            value = cultStats.trash;
            break;
        case 'shop':
            value = cultStats.shop;
            break;
        case 'sanity':
            value = cultStats.sanity;
            break;
        case 'age':
            value = cultStats.age;
            break;
        default:
            value = 0;
    }
    return value;
}
function checkVisible(id) {
    var container = document.getElementById(id);
    if (container.previousElementSibling.style.visibility !== 'visible') {
        container.previousElementSibling.style.visibility = 'visible';
    }
    else if (container.style.visibility !== 'visible') {
        container.style.visibility = 'visible';
    }
}
function calcRemPoints() {
    var container = document.getElementById('remPoints');
    var output = cultStats.points;
    if (cultStats.points < 1) {
        container.innerHTML = 0;
    }
    else {
        container.innerHTML = output;
    }
}
function ranLucky() {
    var luckyStat = RandomNum(6);
    switch (luckyStat) {
        case 1:
            return "grade level";
        case 2:
            return "pokethulu lore";
        case 3:
            return "sanity";
        case 4:
            return "talking trash";
        case 5:
            return "shoplifting";
        case 6:
            return "phys Ed";
        default:
            return "";
    }
}
function calcLucky() {
    var container = document.getElementById('luckyInput');
    cultStats.lucky = ranLucky();
    container.value = cultStats.lucky;
}
function saveChar() {
    // data:
    var data = '\t\t\tPOKETHULU CULTIST \r\nCultist Name: ' + cultStats.name + '\r\n' +
        "Hometown: " + cultStats.hometown + '\r\n' +
        "Type: " + cultStats.type + '\r\n' +
        "Lucky Stat: " + cultStats.lucky + '\r\n' +
        "Grade Level: " + cultStats.grade + '\r\n' +
        "Pokethulu Lore: " + cultStats.lore + '\r\n' +
        "Sanity: " + cultStats.sanity + '\r\n' +
        "Talking Trash: " + cultStats.trash + '\r\n' +
        "Shoplifting: " + cultStats.shop + '\r\n' +
        "Phys Ed: " + cultStats.physED + '\r\n';
    var BLOB = new Blob([data], { type: 'text/plain' });
    var saveFilename = cultStats.name + ".txt";
    var newLink = document.createElement("a");
    newLink.download = saveFilename;
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(BLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(BLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click();
}
