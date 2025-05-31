// Make nav links blink when hovered

// Select all nav links
document.querySelectorAll('.navbar a').forEach(link => {
  // Add mouseenter event to start blinking
  link.addEventListener('mouseenter', () => {
    link.style.animation = 'blink 1s step-start infinite';
  });

  // Remove animation when mouse leaves
  link.addEventListener('mouseleave', () => {
    link.style.animation = '';
  });
});

// Create and append blink keyframes style
const style = document.createElement('style');
style.innerHTML = `
@keyframes blink {
  50% { opacity: 0; }
}
`;
document.head.appendChild(style);


