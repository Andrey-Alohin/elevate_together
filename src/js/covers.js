const section = document.querySelector('.covers .container');
const animRows = document.querySelectorAll('.covers-list');

const observer = new IntersectionObserver(entries => {
  entries.forEach(
    entry => {
      if (entry.isIntersecting) {
        animRows.forEach(row => {
          row.classList.add('show');
        });
      } else {
        animRows.forEach(row => {
          row.classList.remove('show');
        });
      }
    },
    {
      threshold: 0.5,
    }
  );
});

observer.observe(section);
