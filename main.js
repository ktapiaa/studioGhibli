const url = 'https://ghibliapi.herokuapp.com/people';

const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

fetch(url)
    .then(response => response.json())
    .then(data => showPeople(data))
    function handleFetchError() {
      const error = document.createElement('p');
      error.textContent = 'Error';
      container.appendChild(error);
};

document.addEventListener('DOMContentLoaded', showPageContent(), false);

function showPageContent() {
    const url = 'https://ghibliapi.herokuapp.com/people';

    const container = document.querySelector('main');

    function showPeople(people) {
        people.forEach(person => {
         
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // const name = document.createElement('h2');
            // name.textContent = person.name;

            const h3 = document.createElement('h3')
      h3.textContent = person.name;

            const h2 = document.createElement('h1');
            
      h2.textContent = `${person.name}`+ " is a " + `${person.gender}` +" with " +`${person.hair_color}` + " hair and " + `${person.eye_color}` + " eyes. ";

            container.appendChild(card);
            card.appendChild(h3); 
            card.appendChild(h2);
           
        });
    }

    fetch(url)
        .then(response => response.json())
        .then(data => showPeople(data))
        .catch(handleFetchError);
};