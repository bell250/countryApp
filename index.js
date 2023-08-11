'use strict'

 let africa = document.getElementById('africa');
 let america = document.getElementById('america');
 let asia = document.getElementById('asia');
 let europe = document.getElementById('europe');
 let oceania = document.getElementById('oceania');
 let popUp = document.getElementById('pop-up');
 let divValue;
 

//CREATING DIVS FOR AFRICA SECTION
for(let i = 1; i <= 59; i ++){
   
    let africaCountries = document.createElement('div');
    africaCountries.setAttribute('class', 'africaCountries continental');
    africa.appendChild(africaCountries);
   
}
//CREATING DIVS FOR AMERICA SECTION
for(let j = 1; j <=56; j++){
    
    let americaCountries = document.createElement('div')
    americaCountries.setAttribute('class', 'americaCountries continental');
    america.appendChild(americaCountries);
}
//CREATING DIVS FOR ASIA 
for(let j = 1; j <=50; j++){
    
    let asiaCountries = document.createElement('div')
    asiaCountries.setAttribute('class', 'asiaCountries continental');
    asia.appendChild(asiaCountries);
}
//CREATING DIVS FOR EUROPE
for(let j = 1; j <=53; j++){
    
    let europeCountries = document.createElement('div')
    europeCountries.setAttribute('class', 'europeCountries continental');
    europe.appendChild(europeCountries);
}

//CREATING DIVS FOR OCEANIA 
for(let j = 1; j <=27; j++){
    
    let oceaniaCountries = document.createElement('div')
    oceaniaCountries.setAttribute('class', 'oceaniaCountries continental');
    oceania.appendChild(oceaniaCountries);
}


//FUNCTION TO GET API FOR AFRICA REGION
function getAfricaApi(){
    let africaUrl = `https://restcountries.com/v3.1/region/africa`
    fetch(africaUrl, {mode: "cors"})
    .then((result =>{
        return result.json();
    }))
    .then((result) =>{
        let afrCountries = document.querySelectorAll('.africaCountries');
        let index = 0;
        afrCountries.forEach((elem)=>{
            elem.value = result[index].name.common;
            elem.innerHTML = `
            <span class="flag-container">
            <img class="flags" src=${result[index].flags.svg} alt= "${result[index].flags.alt}">
            </span>
            <span class="info-container">
            <span class= "title">${result[index].name.common}</span>
            <span class= "info"> Capital: ${result[index].capital}</span>
            <span class= "info">Area: ${result[index].area} sq km
            <span class= "info">Population: ${result[index].population}
            </span>`;
            index++;
        })

    })
}
getAfricaApi();


//FUNCTION TO GET API FOR AMERICA REGION
function getAmericaApi() {
    let americaUrl = `https://restcountries.com/v3.1/region/america`
    fetch(americaUrl, {mode: "cors"})
    .then(result2 => {
        return result2.json();
    })
    .then(result2 =>{
        
        let amerCountries = document.querySelectorAll('.americaCountries');
        let index = 0;
        amerCountries.forEach(elem => {
            elem.innerHTML = `
            <span class="flag-container">
            <img class="flags" src=${result2[index].flags.png} alt= "${result2[index].flags.alt}">
            </span>
            <span class="info-container">
            <span class= "title">${result2[index].name.common}</span>
            <span class= "info"> Capital: ${result2[index].capital}</span>
            <span class= "info">Area: ${result2[index].area} sq km
            <span class= "info">Population: ${result2[index].population}
            </span>`;
            index++;

        })
    })
}
getAmericaApi();

//FUNCTION TO GET API FOR ASIA REGION
function getAsiaApi() {
    let asiaUrl = `https://restcountries.com/v3.1/region/asia`;
    fetch(asiaUrl, {mode: "cors"})
    .then(result3 =>  result3.json())
    .then(result3 => {
        let asiaCountries = document.querySelectorAll('.asiaCountries');
        let index = 0;
        asiaCountries.forEach(elem => {
            elem.innerHTML = `
            <span class="flag-container">
            <img class="flags" src=${result3[index].flags.png} alt= "${result3[index].flags.alt}">
            </span>
            <span class="info-container">
            <span class= "title">${result3[index].name.common}</span>
            <span class= "info"> Capital city: ${result3[index].capital}</span>
            <span class= "info">Area: ${result3[index].area} sq km
            <span class= "info">Population: ${result3[index].population}
            </span>`;
            index++;

        })
        
    })
}
getAsiaApi();

//FUNCTION TO GET API FOR EUROPE REGION
function getEuropeApi() {
    let europeUrl = `https://restcountries.com/v3.1/region/europe`;
    fetch(europeUrl, {mode: "cors"})
    .then(result4 => result4.json())
    .then(result4 => {
        let europeCountries = document.querySelectorAll('.europeCountries');
        let index = 0;
        europeCountries.forEach(elem => {
            elem.innerHTML = `
            <span class="flag-container">
            <img class="flags" src=${result4[index].flags.png} alt= "${result4[index].flags.alt}">
            </span>
            <span class="info-container">
            <span class= "title">${result4[index].name.common}</span>
            <span class= "info"> Capital city: ${result4[index].capital}</span>
            <span class= "info">Area: ${result4[index].area} sq km
            <span class= "info">Population: ${result4[index].population}
            </span>`;
            index++;
        })
    })
}
getEuropeApi();

function getOceaniaApi() {
    let oceaniaUrl = `https://restcountries.com/v3.1/region/oceania`;
    fetch(oceaniaUrl, {mode: "cors"})
    .then(result5 => result5.json())
    .then(result5 => {
        let oceaniaCountries = document.querySelectorAll('.oceaniaCountries');
        let index = 0;
        oceaniaCountries.forEach(elem => {
            
            elem.innerHTML = `
            <span class="flag-container">
            <img class="flags" src=${result5[index].flags.png} alt= "${result5[index].flags.alt}">
            </span>
            <span class="info-container">
            <span class= "title">${result5[index].name.common}</span>
            <span class= "info"> Capital city: ${result5[index].capital}</span>
            <span class= "info">Area: ${result5[index].area} sq km
            <span class= "info">Population: ${result5[index].population}
            </span>`;
            index++;
        })
        // document.getElementById('flag').src = `https://flagcdn.com/w320/de.png`;
        // document.getElementById('coatArms').src = `https://mainfacts.com/media/images/coats_of_arms/de.png`

    })
}
getOceaniaApi();
//FOLD / UNFOLD BUTTONs FOR EACH DIVISION

let buttons = document.querySelectorAll('.continentHead');
  let contents = document.querySelectorAll('.countries');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
        contents.forEach((content, contentIndex) => {
            if (contentIndex === index) {
            if (content.style.display === 'none') {
                content.style.display = 'flex';
            } else {
                content.style.display = 'none';
            }
            } else {
            content.style.display = 'none';
            }
        });
        });
    });
    

    //FUNCTION TO SHW AND HIDE THE POP - UP DIV
    function hidePopUp() {
        
        
        popUp.style.display = "none";
    }

    function showPopUp() {
        popUp.style.display = 'block';
    }
    //adding Event listener to the divs (".continental")
    let continental = document.querySelectorAll(".continental");
    continental.forEach((elem)=>{
        elem.addEventListener("click", ()=>{
            let innerTitle = elem.querySelector(".info-container .title");
                if (innerTitle) {
                   divValue = innerTitle.textContent;
                   searchResult =divValue;
                   showInfo();
                //    console.log(divValue);
                }
        });
    })
    
    //search function 
    let searchResult;
    function searchApi(){
        
        let searchBar = document.getElementById('searchBar');
        if(searchBar.value == null || searchBar.value.trim() == "") {
            alert("The search bar is empty")
        }

        else if (searchBar.value){
            searchResult = searchBar.value.trim();
            // console.log(`Type:${typeof searchResult} and then Result ${searchResult}`)
            showInfo()   
        } 
    }


    //add eventlistener to the input "KeyBoard Enter"
    let input = document.getElementById('searchBar');
    input.addEventListener('keydown', (event)=>{
        if(event.key === "Enter"){
            searchApi();
        }
    })
    document.addEventListener('keyup', (event)=>{
        if(event.key === 'Escape'){
            hidePopUp();
        }
    })



    // function to show info in poped div 
    let errorMsg = true;
    async function showInfo() {
        let searchUrl = `https://restcountries.com/v3.1/name/${searchResult}`
        // console.log(searchUrl);
        try {
            const searches = await fetch(searchUrl, {mode: "cors"});
            if (!searches.ok) {
                throw new Error(alert('There was an error. Please try again'));
            }
            const datas = await searches.json();
            // console.log(datas)
            document.getElementById('countryName').innerHTML = datas[0].name.official;
            document.getElementById('flag').src = datas[0].flags.png;
            document.getElementById('coatArms').src= datas[0].coatOfArms.png;
            if(datas[0].coatOfArms.png === undefined){
                document.getElementById('coatArms').src = `https://icon-library.com/images/shield-icon-png/shield-icon-png-10.jpg`
            }
            document.getElementById('officialName').innerHTML = datas[0].name.official;
            document.getElementById('capitalCity').innerHTML = datas[0].capital;
            document.getElementById('commonName').innerHTML = datas[0].name.common;
            document.getElementById('demonyms').innerHTML = datas[0].demonyms.eng.f;
            document.getElementById('independency').innerHTML = `${datas[0].independent} and ${datas[0].status}` ;
            document.getElementById('dialingCode').innerHTML = `${datas[0].idd.root}${datas[0].idd.suffixes[0]}`;
            document.getElementById('drivingSide').innerHTML = `${datas[0].car.side}`;
            document.getElementById('area').innerHTML = `${datas[0].area} Sq KM`;
            document.getElementById('population').innerHTML = `${datas[0].population}`;
            document.getElementById('continent').innerHTML = `${datas[0].continents}`;
            document.getElementById('timeZone').innerHTML = `${datas[0].timezones}`;
            document.getElementById('countryLat').innerHTML = `${datas[0].latlng[0]}`;
            document.getElementById('countryLong').innerHTML = `${datas[0].latlng[1]}`;
            document.getElementById('capitalLat').innerHTML = `${datas[0].capitalInfo.latlng[0]}`;
            document.getElementById('capitalLong').innerHTML = `${datas[0].capitalInfo.latlng[1]}`;
            document.getElementById("maps").innerHTML = `<a target="_blank" href=${datas[0].maps.googleMaps}>Google Maps</a>`
            let currency = datas[0].currencies;
            for(let currencyProp in currency){
                 document.getElementById("currency").innerHTML = `${currencyProp} (${currency[currencyProp].name}) 
                 <span  id="symbol"> ${currency[currencyProp].symbol}</span>`
            // console.log(currency[currencyProp].name)
            }
        }
        catch (error) {
            console.error("ther was an aerro", error);
            alert(error);
        }
        finally {
            showPopUp();
        }
    }

   
    

//AAdding the black white toggling

let darkWhite = document.getElementById('darkWhite');
let isDarkSelected = false;
let navLinks = document.querySelectorAll('.navLinks');
let body = document.querySelector('body');
let darkModeImg = document.getElementById('darkModeImg');
let searchIcon = document.getElementById('searchIcon');
let continentHead = document.querySelectorAll(".continentHead");
let dropDown = document.querySelectorAll('.dropDown');
let popUp2 = document.getElementById('mainPopUpInfo');
function turnDark() {
    body.classList.toggle("darkMode");
    popUp2.classList.toggle('pop-up2-black');
    navLinks.forEach((elem)=>{
        elem.classList.toggle('navLinks-black')
    });
    continentHead.forEach((elem)=>{
        elem.classList.toggle("continentHead-black");
    })
    continental.forEach(elem => {
        elem.classList.toggle('continental-black');
    })
    isDarkSelected = !isDarkSelected;
    if(isDarkSelected){
        darkWhite.textContent = "White Mode"
         darkModeImg.src = `https://img.icons8.com/sf-regular-filled/48/FFFFFF/sun.png`
         searchIcon.src= `https://img.icons8.com/ios-filled/50/FFFFFF/google-web-search.png`
         dropDown.forEach((elem)=>{
            elem.src = `https://img.icons8.com/ios-filled/50/down-squared--v1.png`
         })
    }
    else{
        darkWhite.textContent = "Dark Mode"
         darkModeImg.src = `https://img.icons8.com/sf-black-filled/64/moon-symbol.png`;
         searchIcon.src= `https://img.icons8.com/ios-filled/50/google-web-search.png`
         dropDown.forEach((elem)=>{
            elem.src = `https://img.icons8.com/ios-filled/50/FFFFFF/down-squared--v1.png` 
         })
    };
}