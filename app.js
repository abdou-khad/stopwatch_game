let count_left = '00';
let count_right = '00';
let timeout_right;
let timeout_left;

function increment(){
    count_right++;
    let prop_right = document.querySelector(".right");
    prop_right.innerHTML = count_right;
    timeout_right = setTimeout(increment,1000);

    if(count_right > 99){
        clearTimeout(timeout_right);
        count_right = '00';
        count_left++;
        let prop_left = document.querySelector(".left");
        prop_left.innerHTML = count_left;
        timeout_right = setTimeout(increment,1000);


    }

   
}
//start counter
document.querySelector(".btn1").addEventListener("click",()=>{
    increment();
})
//stop counter
document.querySelector(".btn2").addEventListener("click",()=>{
    clearTimeout(timeout_right);
    clearTimeout(timeout_left);
})
//reset counter
document.querySelector(".btn3").addEventListener("click",()=>{
    clearTimeout(timeout_right);
    clearTimeout(timeout_left);
    count_left = '00';
    count_right = '00';
    document.querySelector(".right").innerHTML = count_right;
    document.querySelector(".left").innerHTML = count_left;
})

