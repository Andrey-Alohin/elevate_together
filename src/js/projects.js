import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  initialSlide: 0,
  spaceBetween: 32,
  slidesPerView: "auto",

  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },
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
