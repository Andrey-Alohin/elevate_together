import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

const reviewsList = document.querySelector('ul.reviews-list');

async function getReviews() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
  } catch {}
}

function renderReviews(reviews) {
  const markup = reviews
    .map(({ id, author, avatar_url, review }) => {
      return `<li class="reviews-list-item swiper-slide" id="review-${id}">
        <img src="${avatar_url}" class="review-img" />
        <p class="review-name">${author}</p>
        <div class="review-text-container">
        <p class="review-text">${review}</p>
        </div>
      </li>`;
    })
    .join('');

  reviewsList.insertAdjacentHTML('beforeend', markup);
}

const reviews = await getReviews();
renderReviews(reviews);

new Swiper('.reviews-swiper', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 16,
  autoHeight: true,
  navigation: {
    disabledClass: 'disabled',
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
