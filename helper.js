
// renders raw JSON object
let renderRawResponse = (data) => {
    responseField.innerHTML = JSON.stringify(data);
};

// renders JSON properties to the page

let renderResponse = (data) => {
    let nameValue = data['name'];
    let tempValue = data['main']['temp'];
    let descValue = data['weather'][0]['description'];    
    let iconValue = data['weather'][0]['icon'];
    let windValue = data['wind']['speed'];
    let windDirValue = data['wind']['deg'];
    let iconUrl =  "http://openweathermap.org/img/w/" +iconValue+ ".png";

    const windDirection = (wind) => {
        if (wind > 340 && wind < 20) {
            return 'North';
        }
        else if (wind > 20 && wind < 70) {
            return 'Northeast'
        }
        else if (wind > 70 && wind < 160) {
            return 'Southeast';
        }
        else if (wind > 160 && wind < 220) {
            return 'South'
        }
        else if (wind > 220 && wind < 250) {
            return 'SouthWest';
        }
        else if (wind > 250 && wind < 290) {
            return 'West';
        }
        else {
            return 'Northwest';
        }
    }

    name.innerHTML = nameValue;
    temp.innerHTML = `Temp: ${Math.floor(tempValue)} Degrees F`;
    desc.innerHTML = descValue;
    wind.innerHTML = `Wind: ${Math.floor(windValue)} mph`;
    windDir.innerHTML = `Wind Direction: ${windDirValue} degrees ${windDirection(windDirValue)}`;
    iconImg.src = iconUrl;
    
}


button.addEventListener('click', generateForecast);

