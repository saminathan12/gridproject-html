let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let previous = document.getElementById('previous');
let next = document.getElementById('next');

let active = 0;
let  lenghtItems = items.length -1;
next.onclick = function(){
    if(active + 1 > lenghtItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
previous.onclick = function(){
    if(active - 1 < 0){
        active = lenghtItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()},2500);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active'); 
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}
// dots.forEach((li, key) => {
//     li.addEventListner('click', function(){
//         active = key;
//         reloadSlider();
//     })
// })















