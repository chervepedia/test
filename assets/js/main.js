document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.sidebar-menu button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('animate__bounceIn');
      setTimeout(() => button.classList.remove('animate__bounceIn'), 1000);
    });
  });
});
