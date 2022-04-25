/*const slider = document.querySelector('.slider-div');
let sliderSection = document.querySelectorAll('.slider');
let sliderSectionLast = sliderSection[sliderSection.length - 1];


const btnRight = document.querySelector('#btn-rgt');
const btnLeft = document.querySelector('#btn-lft');


slider.style.marginLeft = "-100%";

function moveRight(){
    let sliderSectionFirst = document.querySelectorAll('.slider')[0];
    


    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1.2s";

    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },1200)
    
}

function moveLeft(){
    let sliderSection = document.querySelectorAll('.slider');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    


    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1.0s";

    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },1200)
    
}



let sliderFunc = setInterval(()=> moveRight(), 5000);



btnLeft.addEventListener('click', function(){moveLeft();});
btnRight.addEventListener('click', function(){moveRight();});
*/

