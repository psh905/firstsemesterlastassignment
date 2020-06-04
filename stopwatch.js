// 기발하게 stopwatch를 가게하는 생각
// 나눗셈관 나머지로

// 100초를 60으로 나누면 1.xxx -> 내림하면 1
// 100%60 = 40 -> 이게 바로 초


const startbtn = document.querySelector('#start');
const resetbtn = document.querySelector('#reset');



let timeElasped = 0;



let stopwatchFunction = function(){
    timeElasped = timeElasped + 1;
    let minute = Math.floor(timeElasped/60);
    let second = timeElasped % 60;
    if(minute<10) minute ="0"+minute;
    if(second<10) second ="0"+second;
    
    let timenow =  minute + ":" + second;
    
    
    let timeshown = document.querySelector('#w_stopwatch h1');
    timeshown.textContent = timenow;
}

let a;
startbtn.onclick = function(){    //start 버튼을 눌렀을 때 다음과 같은 일들이 발생해야 한다. 라는 의미
    
    
    let curState = document.querySelector('#start').textContent;
    if(curState ==='start'){
        document.querySelector('#start').textContent = 'stop'
        a = setInterval(stopwatchFunction, 1000);
    } else {
        document.querySelector('#start').textContent = 'start'
        clearInterval(a);
    }


    


}
resetbtn.onclick = function(){
    timeElasped=0;
    let timeshown = document.querySelector('#w_stopwatch h1');
timeshown.textContent = '00:00';
}
