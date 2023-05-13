const API_key = "f83df87d56eaa2dbac7fd719e5ad2a46";
function renderWeatherInfo(data){
    
    let newpara = document.createElement('p');
    newpara.textContent = `${data?.main?.temp.toFixed(2)} temperature`
    document.body.appendChild(newpara);
}
async function showWeather() {
    try{
        let city = "goa";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
    const data = await response.json();
    console.log("Weather data :->" , data);
        renderWeatherInfo(data);
    }
    catch(err){
        //handle the error here

    }
    
} 

async function getCustomWeatherDetails(){
    try {
        let latitude = 17.6333;
        let longitude = 18.3333;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`);
        let data = await result.json();
    
        console.log(data);
        renderWeatherInfo(data);
    } 
    catch (error) {
        console.log("Error Found" , error);
    }
  
}