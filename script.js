var body = document.querySelector('body')
var display = document.querySelector('h3')
var color1 = document.getElementById('colorPicker1')
var color2 = document.getElementById('colorPicker2')


body.style.background = `linear-gradient(to right, red, yellow)`

function colorChange() {
    var current1 = color1.value
    var current2 = color2.value
    var background = body.style.background
    body.style.background =`linear-gradient(to right, ${current1}, ${current2})`
    display.innerHTML = background

}



color1.addEventListener('input', colorChange)
color2.addEventListener('input', colorChange)
