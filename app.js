let count = 0;
let timeout;

function increment(){
    count++;
    let prop = document.getElementsByClassName("counter")[0];
    prop.innerHTML = count;
    timeout = setTimeout(increment,1000);

   
}
document.querySelector(".btn1").addEventListener("click",()=>{
    increment();
})

document.querySelector(".btn2").addEventListener("click",()=>{
    clearTimeout(timeout);
})

document.querySelector(".btn3").addEventListener("click",()=>{
    clearTimeout(timeout);
    count = 0;
    document.querySelector(".counter").innerHTML = count;
})

// function start(){
//     increment();
// }

// function stop(){
//     clearTimeout(timeout);
// }

// function reset(){
//     clearTimeout(timeout);
//     count = 0;
//     document.querySelector(".counter").innerHTML = count;
// }