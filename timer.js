

const m_timer = document.querySelector('#m_timer');
const s_timer = document.querySelector('#s_timer');
const startbtn2 = document.querySelector('#start');
const resetbtn2 = document.querySelector('#reset');



let min = document.querySelector('#m_timer').value;
let sec = document.querySelector('#s_timer').value;

let timerFunction= function(){
    let min = document.querySelector('#m_timer').value;
    let sec = document.querySelector('#s_timer').value;
        
    let totaltime = 60*min + sec ;
    totaltime = totaltime-1;
   
    
    let minute = Math.floor(time/60);
    let second = time % 60;
    if(minute<10) minute ="0"+minute;
    if(second<10) second = "0"+second;

    let timenow = minute + ":" + second;

    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = timenow;

    

   
    

}
let b;
startbtn2.onclick = function(){

    let curState = document.querySelector('#start').textContent;
    if(curState ==='start' & totaltime>0){
        
        
        document.querySelector('#start').textContent = 'stop'
         b= setInterval(timerFunction, 1000);
    } else{
        
        document.querySelector('#start').textContent = 'start'
        clearInterval(b);
    }

}


resetbtn2.onclick = function(){
    m_timer.value= '0';
    s_timer.value= '0';
}