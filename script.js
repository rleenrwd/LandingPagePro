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
