const baseURL = "https://ghibliapi.herokuapp.com/people";
const people = document.querySelector("h3");

fetch(baseURL)
  .then((result) => result.json())
  //jsonify information grabber from API
  .then((json) => {
    console.log(json);
    displayResults(json);
  });

function displayResults(sgPeople) {
  sgPeople.forEach((p) => {
    let allPeople = document.createElement("li");
    allPeople.innerText =
      p.name +" " + p.age + " " + p.gender +" " + p.eye_color +" " + p.hair_color;
    people.appendChild(allPeople);
  });
}

const name = document.getElement("name");
// name.innerHTML = name.innerHTML.wrap(16);
const age = document.getElement("age");
const gender = document.getElement("gender");
const eyeColor = document.getElement("eyeColor");
const hairColor = document.getElement("hairColor");

const list = document.getElementsByClassName("list");
console.log(list);


// const character= (theCharacter) =>{
//   const name = document.createElement('name')
//   const age = document.createElement('age')
//   const gender = document.createElement('gender')
//   const eyeColor = document.createElement('eyeColor')
//   const hairColor = document.createElement('hairColor')

//   name.innerText = theCharacter.name;
//   age.innerText = theCharacter.age;
//   gender.innerText = theCharacter.gender;
//   eyeColor.innerText = theCharacter.eye_color;
//   hairColor.innerText = theCharacter.hair_color;

//   const nameTag = document.querySelector('#name');
//   const ageTag = document.querySelector('#age');
//   const genderTag = document.querySelector('#gender');
//   const eyeColorTag = document.querySelector('#eyeColor');
//   const hairColorTag = document.querySelector('#hairColor');

//   nameTag.appendChild(name)
//   nameTag.appendChild(age)
//   nameTag.appendChild(gender)
//   nameTag.appendChild(eyeColor)
//   nameTag.appendChild(hairColor)

// }
