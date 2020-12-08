function fun1(){
let btn=document.createElement("button");    
let d=new Date();
let hrs=d.getHours();
let min=d.getMinutes();
let sec=d.getSeconds();
let period="AM";

if(hrs==0) hrs=12;
if(hrs>12){
    hrs=hrs-12;
    period="PM";
}

    hrs=hrs<10?`0${hrs}`:hrs;
    min=min<10?`0${min}`:min;
    sec=sec<10?`0${sec}`:sec;

//let time=hrs+":"+min+":"+sec+" "+period;
let time=`${hrs}:${min}:${sec}:${period}`;
setInterval(fun1,1000);
document.getElementById("clock").innerText=time;

}

function fun2(){
    let btn=document.createElement("button");    
    let d=new Date();
    let hrs=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    let period="AM";
    
    if(hrs==0) hrs=12;
    if(hrs>12){
        period="PM";
    }
    hrs=hrs<10?`0${hrs}`:hrs;
    min=min<10?`0${min}`:min;
    sec=sec<10?`0${sec}`:sec;
    
    
    let time=hrs+":"+min+":"+sec+" "+period;
    //let time='${hrs}:${min}:${sec}:${period}';
    
    document.getElementById("clock").innerText=time;
    setInterval(fun2,1000);
    }
    