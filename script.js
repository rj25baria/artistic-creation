let currentSlide = 0;
const slide = document.getElementById("bannerSlide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slide.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % 2;
  showSlide(currentSlide);
}, 5000);
