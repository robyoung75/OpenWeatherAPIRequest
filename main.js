let button = document.getElementById('button');
let inputValue = document.getElementById('inputValue');
let name = document.getElementById('name');
let desc = document.getElementById('desc');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let windDir = document.getElementById('windDir');
let iconImg = document.getElementById('icon');
let responseField = document.getElementById('display');
let apiKey = "c45af4606c0dc1a95faa7809e469b398"
const openWeatherKey = '0cdcb9cc52e0ee323326fe0c56fbca94';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';


/*

// fetch Request Example

button.addEventListener('click', function() {
    fetch(""+weatherUrl+"?q="+inputValue.value+"&appid="+apiKey+"&units=imperial")
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })
    .catch(err => alert('Wrong city name!'))
})
*/

// Async Get Request, uses helper functions 

let generateForecast = async () => {
    try {
        const response = await fetch(""+weatherUrl+"?q="+inputValue.value+"&appid="+apiKey+"&units=imperial");
        if(response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);          
        }
    }
    catch(error) {
        console.log(error);
    }
}


