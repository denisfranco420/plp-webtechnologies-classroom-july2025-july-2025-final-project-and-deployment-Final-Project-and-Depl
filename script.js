// Alert Button
function showAlert() {
  alert("Hello! Thanks for visiting my website 😊");
}

// Image Slider
let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll(".slides img");
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}
function nextSlide() {
  const slides = document.querySelectorAll(".slides img");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
function prevSlide() {
  const slides = document.querySelectorAll(".slides img");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Contact Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thank you for your message!";
  formMessage.style.color = "green";
  this.reset();
});
