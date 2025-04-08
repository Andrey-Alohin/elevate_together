import axios from 'axios';
import Swiper from 'swiper';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

const reviewsSection = document.querySelector('.reviews-section');
const reviewsList = document.querySelector('ul.reviews-list');
const reviewsBtnBox = document.querySelector('.reviews-btn-box');
const reviewsPlaceholder = document.querySelector('.reviews-placeholder');

async function getReviews() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return { success: true, reviews: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function renderReviews(reviews) {
  const markup = reviews
    .map(({ id, author, avatar_url, review }) => {
      return `<li class="reviews-list-item swiper-slide" id="review-${id}">
        <img src="${avatar_url}" class="review-img" />
        <h3 class="review-name">${author}</h3>
        <div class="review-text-container">
        <p class="review-text">${review}</p>
        </div>
      </li>`;
    })
    .join('');

  reviewsList.insertAdjacentHTML('beforeend', markup);
  reviewsBtnBox.classList.remove('hidden');
}

function initializeSlider() {
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
}

function renderError(error) {
  iziToast.error({
    message: error,
    position: 'topRight',
  });

  reviewsPlaceholder.classList.remove('hidden');
}

async function processReviews() {
  const { success, reviews, error } = await getReviews();

  if (success) {
    renderReviews(reviews);
    initializeSlider();
  } else {
    renderError(error);
  }
  observer.unobserve(reviewsSection);
}

const observer = new IntersectionObserver(
  entries => {
    if (entries[0].isIntersecting) {
      processReviews();
    }
  },
  {
    root: null,
    threshold: 0.1,
  }
);

observer.observe(reviewsSection);
