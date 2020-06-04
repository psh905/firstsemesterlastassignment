


let clockFunction = function(){

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    if(hour<10) hour ="0"+hour;
    if(minute<10) minute ="0"+minute;
    if(second<10) second ="0"+second;
    
    
    
    let timenow = hour + ":" + minute + ":" + second;
    
    let timeshown = document.querySelector('#w_clock h1');
    timeshown.textContent = timenow;
    }  //함수로 선언을 하고 변수로 담았기 때문에 변수를 선언해줘야 함수가 작동하는것!!
    
    setInterval(clockFunction, 1000); //매 1초마다clockFunction이라는 함수를 실행하라는 의미.
    
    