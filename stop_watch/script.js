function Clock(){  
    date=new Date
    let h=date.getHours()
    let m=date.getMinutes()
    let s=date.getSeconds()
        //hrs
        if(h<10)
        document.getElementById("hr1").innerText="0"+h
        else
        document.getElementById("hr1").innerText=h
        //min
        if(m<10)
        document.getElementById("min1").innerText="0"+m
        else
        document.getElementById("min1").innerText=m
        //sec
        if(s<10)
        document.getElementById("sec1").innerText="0"+s
        else
        document.getElementById("sec1").innerText=s
}
setInterval(Clock,1000)
//start
let gameone=0;
let i,j,k,f;
    i=0
    j=0
    k=0
    f=0
let myInterval
function start(){       
function timer()
{
        
        {
        f++;
        //calculation for stop watc
        i=f%60;
        if(i%60==0)
        j=parseInt(f/60);
        if(j%60==0)
        k=parseInt(f/360);
        //sec
        if(i<10)
        document.getElementById("sec").innerText="0"+i
        else
        document.getElementById("sec").innerText=i
        //min
        if(j<10)
        document.getElementById("min").innerText="0"+j
        else
        document.getElementById("min").innerText=j
        //hrs
        if(k<10)
        document.getElementById("hr").innerText="0"+k
        else
        document.getElementById("hr").innerText=k
        }
}
myInterval = setInterval(timer, 1000);
    
}function stop(){
clearTimeout(myInterval);
}
function reset(){
clearTimeout(myInterval);
f=0;  
i=0;
k=0;
j=0;
//sec
document.getElementById("sec").innerText="00"
//min
document.getElementById("min").innerText="00"
//hrs
document.getElementById("hr").innerText="00"
}