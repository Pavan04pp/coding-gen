// Interactive button hover animation
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
  
  // Contact form submission handling
  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your message!');
    // You can add form submission logic here
  });

  // Typing Effect for Text
const typingTextElement = document.querySelector(".typing-text");
const phrases = [
  "A passionate Web Developer",
  "Enthusiastic about Artificial intelligence and  Machine Learning",
  "Lifelong Learner & Problem Solver",
  "Keep Learning,Keep Growing!!!"
];
let currentPhraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingTextElement.textContent = currentPhrase.substring(0, charIndex);

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

