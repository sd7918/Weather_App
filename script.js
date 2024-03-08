const apiKey="6cb2d504fdace17487f50d4a65bd04b5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".inputSeach");
const searchBtn=document.querySelector(".btn");

const midImage=document.querySelector(".midImg")


async function checkWeather(city) {
    const respone= await fetch (apiUrl + city +`&appid=${apiKey}`);
    if (respone.status == 404) {
        alert("please give a proper city");
    }
    else{
    var data =await respone.json();
    // console.log(data);

    document.querySelector(".temparature").innerHTML= Math.round (data.main.temp) +"°c";
    document.querySelector(".location").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";

    if(data.weather[0].main === "Clear"){
        midImage.src="images/clear.png";
    }
    else if(data.weather[0].main === "Clouds"){
        midImage.src="images/clouds.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        midImage.src="images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
        midImage.src="images/mist.png";
    }
    else if(data.weather[0].main === "Rain"){
        midImage.src="images/rain.png";
    }
    else if(data.weather[0].main === "Snow"){
        midImage.src="images/snow.png";
    }

    // document.querySelector(".error").style.display="none";
}
    
    

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})



