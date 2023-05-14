// const API_key = "f83df87d56eaa2dbac7fd719e5ad2a46";
// function renderWeatherInfo(data){
    
//     let newpara = document.createElement('p');
//     newpara.textContent = `${data?.main?.temp.toFixed(2)} temperature`
//     document.body.appendChild(newpara);
// }
// async function showWeather() {
//     try{
//         let city = "goa";
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
//     const data = await response.json();
//     console.log("Weather data :->" , data);
//         renderWeatherInfo(data);
//     }
//     catch(err){
//         //handle the error here

//     }
    
// } 

// async function getCustomWeatherDetails(){
//     try {
//         let latitude = 17.6333;
//         let longitude = 18.3333;
    
//         let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`);
//         let data = await result.json();
    
//         console.log(data);
//         renderWeatherInfo(data);
//     } 
//     catch (error) {
//         console.log("Error Found" , error);
//     }
  
// }


// function getLocation(){
//     if(navigator.getLocation){
//         navigator.geolocation.getCurrentPosition(showPosition)
//     }
//     else{
//         console.log("No geolocation Found");
//     }
// }

// function showPosition(position){
//     let lat = position.coords.latitude;
//     let longi = position.coords.longitude;

//     console.log(lat);
//     console.log(longi);
// }

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initially variables need

let currentTab = userTab;
const API_KEY = "f83df87d56eaa2dbac7fd719e5ad2a46";
currentTab.classList.add("current-tab");

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    }

    if(!searchForm.classListcoa)
}



userTab.addEventListener("click", () =>{
    switchTab(userTab);
});


searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});

