import iziToast from 'izitoast';

const burgerEl = document.querySelector('.header-burger');
const burgerLinkEl = document.querySelectorAll('.header-dropdown-item a');
const dropdownEl = document.querySelector('.header-dropdown-wrapper');
const closeMenuBtnEl = document.querySelector('.header-close-btn');
const menuBtnEl = document.querySelector('.header-menu-title');
const menuItemEl = document.querySelector('.header-nav-menu-list');
const menuLinksEl = document.querySelectorAll('.header-nav-menu-item a');

// Додаємо слухача одразу
burgerEl.addEventListener('click', showMenuMobile);
menuBtnEl.addEventListener('click', showMenuTabletDesktop);

function showMenuMobile() {
  try {
    dropdownEl.classList.add('active'); // Показуємо меню
    closeMenuBtnEl.addEventListener('click', closeMenuBtnFun); // Додаємо слухач до кнопки закриття
    burgerEl.removeEventListener('click', showMenuMobile); // Видаляємо слухач з бургеру, щоб уникнути повторних кліків
    burgerLinkEl.forEach(link => {
      link.addEventListener('click', linkLisenerBurger);
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    iziToast.error({
      title: 'Error',
      message: 'Sorry, an error occurred. Please try again later.',
      position: 'topRight',
    });
  }
}

function closeMenuBtnFun() {
  try {
    dropdownEl.classList.remove('active'); // Приховуємо меню
    closeMenuBtnEl.removeEventListener('click', closeMenuBtnFun); //  видаляємо слухача з кнопки закриття
    burgerEl.addEventListener('click', showMenuMobile); //повертаємо слухача на бургер
  } catch (error) {
    console.log(error);
    console.log(error.message);
    iziToast.error({
      title: 'Error',
      message: 'Sorry, an error occurred. Please try again later.',
      position: 'topRight',
    });
  }
}

function linkLisenerBurger() {
  try {
    closeMenuBtnFun();
    burgerLinkEl.forEach(link => {
      link.removeEventListener('click', linkLisenerBurger);
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    iziToast.error({
      title: 'Error',
      message: 'Sorry, an error occurred. Please try again later.',
      position: 'topRight',
    });
  }
}

function showMenuTabletDesktop() {
  try {
    menuItemEl.classList.add('active');
    menuLinksEl.forEach(link => {
      link.addEventListener('click', linkLisenerMenu);
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    iziToast.error({
      title: 'Error',
      message: 'Sorry, an error occurred. Please try again later.',
      position: 'topRight',
    });
  }
}
function linkLisenerMenu() {
  try {
    menuLinksEl.forEach(link => {
      link.removeEventListener('click', linkLisenerMenu);
    });
    menuItemEl.classList.remove('active');
  } catch (error) {
    console.log(error);
    console.log(error.message);
    iziToast.error({
      title: 'Error',
      message: 'Sorry, an error occurred. Please try again later.',
      position: 'topRight',
    });
  }
}
