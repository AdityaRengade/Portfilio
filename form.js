document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('form-message');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
      showMessage('Please fill in all required fields', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('Please enter a valid email address', 'error');
      return;
    }
    
    // Simulate form submission (in a real app, you would use AJAX/Fetch)
    setTimeout(() => {
      contactForm.reset();
      showMessage('Message sent successfully! I will get back to you soon.', 'success');
    }, 1000);
  });
  
  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.style.opacity = '0';
      setTimeout(() => {
        formMessage.className = 'form-message';
        formMessage.style.opacity = '1';
      }, 500);
    }, 5000);
  }
});