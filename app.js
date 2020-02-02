var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// galerija
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }


//prijava na newsletter
function myFunction1() {
  var checkBox = document.getElementById("prijavaNaNewsletter");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
      text.style.display = "block";
  } else {
      text.style.display = "none";
  }
}

//resetovanje forme
function myFunction2() {
  var checkBox = document.getElementById("prijavaNaNewsletter");
  checkBox.checked = false;
  var text = document.getElementById("text");
  text.style.display = "none";
  reset(); 
}

// $(document).ready(function(){ 
//   var d = new Date();
//   $("#date")[0].innerHTML = d.toLocaleDateString() + " &nbsp";
// })
