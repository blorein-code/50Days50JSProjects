// const open = document.getElementById("open")
// const close = document.getElementById("close")
// const container = document.querySelector(".container")

var open = $('#open')
var close = $('#close')
var container = $('.container')

$("#open").on("click", () => container.addClass('show-nav'));
$("#close").on("click", () => container.removeClass('show-nav'));


// open.addEventListener('click', ()=>container.classList.add('show-nav'))
// close.addEventListener('click', ()=>container.classList.remove('show-nav'))