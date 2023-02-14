const $ = document.querySelector.bind(document);

function colorChange(){
    document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('blue') });
