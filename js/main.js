//loops through numbers by increments of 5
for(var i = 0; i < 100; i = i + 5){
  console.log(i);
}
// function to get user value from HTML input element
function getInfo () {
  var info = document.getElementById('userData');
  var dataInfo = info.value;
  console.log(dataInfo);
}
// 3 Objects with 4 properties
var Myla = {
    name: "myla",
    age: 32,
    location: "San Jose",
    eyes: "brown"
};
var Rich = {
    name: "rich",
    age: 3001,
    location: "San Francisco",
    eyes: "black"
};
var Pichard = {
    name: "pichard",
    age: 1,
    location: "Raleigh",
    eyes: "brown"
};
// creates an array of objects
var arrayOfObjects = [Myla,Rich,Pichard];
console.log(arrayOfObjects);
//loops throught "arrayOfObjects"
for(var i = 0; i < arrayOfObjects.length; i++){

  //looking for element with class of disp
  var display = document.getElementById('display');

  //creates empty HTML elements
  var heading = document.createElement('h3');
  var heading1 = document.createElement('h3');
  var paragraph = document.createElement('p');
  var paragraph1 = document.createElement('p');

  //creates text node for empty elements
  var headingTextNode = document.createTextNode("Your name is:" + arrayOfObjects[i].name);
  var headingTextNode1 = document.createTextNode("Your age is:" + arrayOfObjects[i].age);
  var paragraphTextNode = document.createTextNode("You live in:" + arrayOfObjects[i].location);
  var paragraphTextNode1 = document.createTextNode("Your eyes are:" + arrayOfObjects[i].eyes);

  //puts text nodes into empty HTML elements
  heading.appendChild(headingTextNode);
  heading1.appendChild(headingTextNode1);
  paragraph.appendChild(paragraphTextNode);
  paragraph1.appendChild(paragraphTextNode1);

  //puts elements with textnode in div
  display.appendChild(heading);
  display.appendChild(heading1);
  display.appendChild(paragraph);
  display.appendChild(paragraph1);
};
