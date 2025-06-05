document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  if (!name || !email || !message) {
    formMsg.textContent = 'Please fill out all fields.';
    formMsg.className = 'text-danger';
  } else {
    formMsg.textContent = 'Message sent successfully!';
    formMsg.className = 'text-success';
    this.reset();
  }
});





const carousel = document.getElementById('testimonialCarousel');

function rotateCarousel() {
  const cards = carousel.querySelectorAll('.carouselCard');
  
  // Remove current classes
  cards.forEach(card => {
    card.classList.remove('active', 'dimmed');
  });

  // Move first card to the end
  carousel.appendChild(cards[0]);

  // Reassign classes: center = active
  const updatedCards = carousel.querySelectorAll('.carouselCard');
  updatedCards.forEach((card, i) => {
    if (i === 1) {
      card.classList.add('active');
    } else {
      card.classList.add('dimmed');
    }
  });
}

// Initial setup
rotateCarousel(); // makes second card active on load
setInterval(rotateCarousel, 5000); // Rotate every 5s



