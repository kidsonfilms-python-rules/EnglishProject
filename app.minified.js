var slideIndex=1;showSlides(slideIndex);function plusSlides(a){showSlides(slideIndex+=a)}function currentSlide(a){showSlides(slideIndex=a)}function showSlides(d){var a;var b=document.getElementsByClassName("mySlides");var c=document.getElementsByClassName("dot");if(d>b.length){slideIndex=1}if(d<1){slideIndex=b.length}for(a=0;a<b.length;a++){b[a].style.display="none"}for(a=0;a<c.length;a++){c[a].className=c[a].className.replace(" active","")}b[slideIndex-1].style.display="block"}$(document).keypress(function(a){if(a.charCode==103){plusSlides(1)}});