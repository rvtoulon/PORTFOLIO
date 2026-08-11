const slider = document.getElementById('slider');
const cardWidth = 360; // largeur card + gap

function nextSlide() {
  slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
}

function prevSlide() {
  slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
}
