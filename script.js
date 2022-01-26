const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click',() => {
       nav.classList.add('active'); 
    } )
}
if (close){
    close.addEventListener('click',() => {
       nav.classList.remove('active'); 
    } )
}


// Single Product Details 
var MainImg = document.getElementById("MainImg");
        var SmallImg = document.getElementsByClassName("small-img");

        var mainImg = document.getElementById('mainImg');
var smallImg = document.getElementById('small-img');


SmallImg[0].onclick = function(){
    MainImg.src = SmallImg[0].src;}
SmallImg[1].onclick = function(){
    MainImg.src = SmallImg[1].src;}
SmallImg[2].onclick = function(){
    MainImg.src = SmallImg[2].src;}
