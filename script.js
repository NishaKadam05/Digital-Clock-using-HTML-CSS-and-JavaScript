function digitalClock(){
    let clock=document.querySelector(".digital-clock");
    let time=new Date();
    let sec=time.getSeconds();
    let min=time.getMinutes();
    let hr=time.getHours();
    let ampm="AM";
    if(hr>12)
    {
        ampm="PM";
        hr=hr-12;
    }
    if(hr==0)
    {
        hr=12;
    }
    if(sec<10)
    {
        sec='0'+sec;
    }
    if(min<10)
    {
        min='0'+min;
    }
    if(hr<10)
    {
        hr='0'+hr;
    }
    clock.innerHTML=hr+" : "+min+" : "+sec+" "+ampm;
}
digitalClock();
setInterval(digitalClock,1000);