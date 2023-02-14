const $ = document.querySelector.bind(document);

const div1 = $('#div1');
const div2 = $('#div2');

function backgroundcolorGreen(){
    const paragraph = document.getElementById('intro');
    paragraph.style.backgroundColor = 'green';
}

function backgroundcolorRed(){
    const paragraph = document.getElementById('intro');
    paragraph.style.backgroundColor = 'red';

}