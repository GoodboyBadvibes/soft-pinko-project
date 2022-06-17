// const { Typed } = require("./typed")

window.addEventListener('load', function(){
  new WOW().init()
})

let typed = new Typed('.typing-effect',{
  strings: [
    "Brand",
    "Business",
    "Start Up",
  ], backSpeed: "10", typeSpeed:"9", loop:true
})

$('.counter').counterUp({
  delay : 20,
  time : 1000
})