let hamburgerM = document.getElementById("menu");
let close = document.getElementById("close");
let sidebar = document.querySelector(".sidebar");


hamburgerM.addEventListener("click", ()=>{
     sidebar.style.display = "flex";
});

close.addEventListener("click", ()=>{
    sidebar.style.display = "none";
})

let list = document.querySelector('.list')
let items = document.querySelectorAll('.slides')
let next_btn = document.getElementById('next');
let prev_btn = document.getElementById('prev');

let active = 0;
let lengthItems = items.length -1; 

 next_btn.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0
    }else{
        active++;
    }

    reloadSlider();
 }

 prev_btn.onclick =  function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active--;
    }
    reloadSlider();
 }

 let refreshSlider =  setInterval(()=>{next_btn.onclick()},3000);
 function reloadSlider(){
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';
     clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{next_btn.onclick()},5000)
 }