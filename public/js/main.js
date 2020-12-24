const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp-status");
const dataHide = document.querySelector(".data-hide");
console.log(dataHide);
const getInfo = async (e)=>{
    e.preventDefault();
    let cityValue = cityName.value;
    if(cityValue == ""){
       city_name.innerText = "Please enter city name before search";
       dataHide.classList.add("data-hide");
    }else{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=b254f45705c4df3c679dc2bf656b6142&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            const tempSituation = arrData[0].weather[0].main;
            temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

            if(tempSituation === "Clear"){
                temp_status.innerHTML ='<i class="fas fa-sun" style="#eccc68";></i>';
            }else if(tempSituation === "Clouds"){
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color:#f1f2f6";></i>';
            }else if(tempSituation === "Rain"){
                temp_status.innerHTML = '<i class="fas fa-cloud-rain" style="color:#a4bobe";>';
             }else{
                temp_status.innerHTML = '<i class="fas fa-sun" style="color:#eccc68";>';
             }
             
            dataHide.classList.remove("data-hide");
        }catch(err){
            city_name.innerText = "Please enter city name properly";
            dataHide.classList.add("data-hide");
        }
    }
    
}

submitBtn.addEventListener("click",getInfo)