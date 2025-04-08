import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/css/bundle';
import 'swiper/css/navigation';


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  initialSlide: 0,
  spaceBetween: 32,
  autoHeight: true,
  slidesPerView: 1,
  grabCursor: true,

  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },
});

document.querySelectorAll('.swiper-slide a, .swiper-slide button').forEach(el => {
  el.addEventListener('focus', () => {
    const slide = el.closest('.swiper-slide');
    const slideIndex = Array.from(swiper.slides).indexOf(slide);

    if (slideIndex !== swiper.activeIndex) {
      swiper.slideTo(slideIndex, 300);

      setTimeout(() => {
        slide.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }, 300);
    }
  });
});

function updateNavBtn() {
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  if (swiper.isBeginning) {
    btnPrev.disabled = true;
    btnPrev.classList.add('disabled');
  } else {
    btnPrev.disabled = false;
    btnPrev.classList.remove('disabled');
  }

  if (swiper.isEnd) {
    btnNext.disabled = true;
    btnNext.classList.add('disabled');
  } else {
    btnNext.disabled = false;
    btnNext.classList.remove('disabled');
  }
}

updateNavBtn();

swiper.on('slideChange', updateNavBtn);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' && !swiper.isEnd) {
    swiper.slideNext();
  } else if (event.key === 'ArrowLeft' && !swiper.isBeginning) {
    swiper.slidePrev();
  }
});

document.getElementById('btn-next').addEventListener('click', () => {
  swiper.slideNext();
});

document.getElementById('btn-prev').addEventListener('click', () => {
  swiper.slidePrev();
});
