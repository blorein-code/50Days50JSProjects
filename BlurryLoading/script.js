// const loadText =  $('.loading-text');
// const bg =  $('.bg');
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')


let load = 0;
let int = setInterval(blurring,30);

function blurring () {
    load++
    if (load > 99) {
    clearInterval(int)
    // console.log(load);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
    // loadText.text(`${load}%`)
    // loadText.css("opacity", scale(load,0,100,1,0));
    // bg.css("filter",`blur(${scale(load,0,100,30,0)}px)`)
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
