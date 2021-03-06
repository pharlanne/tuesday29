var url = "https://restcountries.eu/rest/v1",
 countries;

selectCountry;
window.onload = function(){
  savedCountry = JSON.parse(localStorage.getItem("country_app")) || [];
  console.log("on load get countries", savedCountry);

  var select = document.getElementById( "countries-select" ),
    content = document.getElementById( "content" );

  request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = function() {
    if( request.status === 200 ) {
      var jsonString = request.responseText
      countries = JSON.parse( jsonString );
      createSelect( select );
      select.onchange = selectCountry;

    }
    var center = {lat:55.9520, lng:-3.1900}
    var zoom = 14;
    var map = new Map(center, zoom);
  }
  request.send();
}

function createSelect( select ) {
  countries.forEach( function( country, index ) {
    var option = document.createElement( "option" );
    option.value = index;
    option.innerHTML = country.name;
    select.appendChild( option );

  });
}

function selectCountry( event ) {
  content.innerHTML = "";
  var countryName = document.createElement( "p" ),
    population = document.createElement( "p" ),
    capital = document.createElement( "p" );
console.log("yolo");

  countryName.innerText = countries[this.value].name;
  population.innerText = countries[this.value].population;
  capital.innerText = countries[this.value].capital;

  content.appendChild( countryName );
  content.appendChild( population );
  content.appendChild( capital );



   var savedCountry = {
    name: countryName.innerText,
    population: population.innerText,
    capital: capital.innerText
    // var center = {lat:55.9520, lng:-3.1900}
    // var zoom = 14;
    // var map = new Map(center, zoom);
   }

  localStorage.setItem("country_app", JSON.stringify(savedCountry));
   
}


