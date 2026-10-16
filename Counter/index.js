const dec=document.getElementById("dec");
const reset=document.getElementById("reset");
const inc=document.getElementById("inc");
const count=document.getElementById("count");

let countla=0;
inc.onclick=function(){
    countla++;
    count.textContent=countla;
}

dec.onclick=function(){
    countla--;
    count.textContent=countla;
}
reset.onclick=function(){
    countla=0;
    count.textContent=countla;
}