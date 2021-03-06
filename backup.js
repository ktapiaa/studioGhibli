const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(logo);
app.appendChild(container);

//creating the connection to the API
var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/people', true);
//accessing data inside 'onload' function
request.onload = function () {

  //catching errors
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(people => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = people.name;

      const h2 = document.createElement('h2');
      h2.textContent = `${people.name}`+ " is a " + `${people.gender}` +" with " +`${people.hair_color}` + " hair and " + `${people.eye_color}` + " eyes. ";

      // let img = document.createElement('img');
      // section.appendChild(img.url);

      // const h3= document.createElement('h3');
      // h3.imageContent= people.image;


      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
     // card.appendChild(h3);
     
    });
 
  }
}

request.send();

const images={
  pazu: "https://static.wikia.nocookie.net/studio-ghibli/images/1/1e/Pazu.png/revision/latest?cb=20110702234413", 
  lusheetaToelUlLaputa: "https://static.wikia.nocookie.net/p__/images/1/19/Princess_Sheeta.png/revision/latest?cb=20190926071955&path-prefix=protagonist",
  dola: "https://i.pinimg.com/originals/56/41/ba/5641ba84a5b2b98b3beb39b2cd2ce1fe.jpg",
romskaPaloUILaputa: "",
Uncle Pom: "",
generalMuoro:""
}