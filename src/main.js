//https://uxfol.io/alejandrabarriga


let slideIndex = 0;

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}


const showSlides = (n) => {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n === slides.length || n ===  -1 ) {slideIndex = 0}    
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].classList.add('active');
}
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  prev.addEventListener('click', () => {
  plusSlides(-1)
  });
  next.addEventListener('click', () => {
  plusSlides(1)
  });
showSlides(slideIndex);