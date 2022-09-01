let count = 0;
let timeout;

function increment(){
    count++;
    let prop = document.getElementsByClassName("counter")[0];
    prop.innerHTML = count;
    timeout = setTimeout(increment,1000);

   
}


function start(){
    increment();
}

function stop(){
    clearTimeout(timeout);
}

function reset(){
    clearTimeout(timeout);
    count = 0;
    document.querySelector(".counter").innerHTML = count;
}