// menu
let box = document.querySelector(".box");
let list = document.querySelector('.menu-list');


box.addEventListener('click', function(){
 list.classList.toggle('active');
})

// menu


// counter

let inc = document.querySelector('.inc');
let counterNum = document.querySelector('.counter-num')
let dec = document.querySelector('.dec');


inc.addEventListener('click', function(){
  let rslt = counterNum.value = Number( counterNum.value) + 1 ;
  console.log(rslt);
})

dec.addEventListener('click', function(){
    if(Number( counterNum.value) > 1){
        counterNum.value = Number( counterNum.value) - 1 ;
    }else{
        dec.style.cursor = 'not-allowed';
    }
   
  })

//   counter

// range

let rangeValue = document.querySelector('.range-value');
let rangeResult = document.querySelector('.range-result');

rangeValue.addEventListener('input', function(){
  let rslt = Number(rangeValue.value);
  rangeResult.innerHTML = rslt;
})
// range


// random
let randomDisplay = document.querySelector('#random');
let randomBtn = document.querySelector('.random-btn');

randomBtn.addEventListener('click', function(){
    let pink = Math.round(Math.random()* 255);
    let green = Math.round(Math.random()* 255);
    let blue = Math.round(Math.random()* 255);
    randomDisplay.style.backgroundColor = `rgb(${pink},${green},${blue})`;
})
// random
// image display

let file = document.querySelector('#file')
let testImage = document.querySelector('.test-image')


file.addEventListener('change', function(e){

 let url =   URL.createObjectURL(e.target.files[0]);
 testImage.src = url;
e.preventDefault()
})

// image display