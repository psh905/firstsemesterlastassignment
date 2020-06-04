// 사용자의 위도 경도 받기 -> 그곳에서 온도와 장소 뽑아내기 -> html에 추가해주기

const COORDS = "coords" // 위도= ... 경도=...

const API_KEY ="6642a1507234e4e621cbfa604fe8ef2d"

const weather = document.querySelector(".js-weather")
//response : JSON -> 자바스크립트용으로 변환해야한다.
function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){

    return response.json()

    }
    ).then(function(json){
        console.log(json);
        const temperature = json.main.temp
        const name = json.name
        console.log(temperature);
        console.log(name);
        weather.innerText= `오늘의 온도 : ${temperature}도 and 장소 : ${name}`
    })

}
function saveCoords(coordsObj){

    localStorage.setItem(COORDS, JSON.stringify(coordsObj))

} //json파일로 저장해줘야함 인터넷에 저장하려면
function handlesuccess(position){
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude,
        longitude
    }
    
    saveCoords(coordsObj)

}
function handleerror(){
console.log('error');

}

function askforPostion(){
    navigator.geolocation.getCurrentPosition(handlesuccess, handleerror);
}


function loadedCoords(){
    const loadedcoords = localStorage.getItem(COORDS)
    console.log(loadedcoords)
    if(loadedcoords === null){
        askForCoords()
    } else{
        const parsecoords = JSON.parse(loadedcoords)
        
        getWeather(parsecoords.latitude, parsecoords.longitude)
    }
} //위도와 경도를 집어넣어서 온도와 장소를 가져오는 함수
function init(){
    loadedCoords()

} //실행할 함수

init(); //함수실행