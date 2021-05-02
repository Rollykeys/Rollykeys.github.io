const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("sec");

const indDay= '25 September 2021';

function countdown(){
    const indDaydate =new Date(indDay);
    const currentdate = new Date();

    const seconds = (indDaydate - currentdate)/1000;
    const days = Math.floor((seconds)/(3600*24));
    const hours = Math.floor(((seconds)-((days)*(3600*24)))/3600);
    const mins = Math.floor(((seconds)-(((days*24)+(hours))*(3600)))/60);
    const secs = Math.floor(((seconds)-(((days*24*60*60)+(hours*60*60)+(mins*60)))));
    console.log(secs);

    day.innerHTML= formatTime(days);
    hour.innerHTML= formatTime(hours);
    min.innerHTML=formatTime(mins);
    sec.innerHTML= formatTime(secs);
}
// initial call

setInterval(countdown, 1000);
countdown();
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}