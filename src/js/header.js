import iziToast from 'izitoast';

const burgerEl = document.querySelector('.header-burger');
const burgerLinkEl = document.querySelectorAll('.header-dropdown-item a');
const dropdownEl = document.querySelector('.header-dropdown-wrapper');
const closeMenuBtnEl = document.querySelector('.header-close-btn');
const menuBtnEl = document.querySelector('.header-menu-title');
const menuItemEl = document.querySelector('.header-nav-menu-list');

// Додаємо слухача одразу
burgerEl.addEventListener('click', showMenuMobile);
menuBtnEl.addEventListener('click', showMenuTabletDesktop);

// ф-я показу меню бургер
function showMenuMobile() {
  try {
    dropdownEl.classList.add('active'); // Показуємо меню
    closeMenuBtnEl.addEventListener('click', closeMenuBtnFun); // Додаємо слухач до кнопки закриття
    burgerEl.removeEventListener('click', showMenuMobile); // Видаляємо слухач з бургеру, щоб уникнути повторних кліків
    burgerLinkEl.forEach(link => {
      link.addEventListener('click', linkListenerBurger);
    }); // Додаємо слухачів на посилання пунктів дроп меню
    document.body.classList.add('modal-open'); // Додаємо клас, щоб не було скрола
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
// ф-я закриття меню бургер
function closeMenuBtnFun() {
  try {
    dropdownEl.classList.remove('active'); // Приховуємо меню
    closeMenuBtnEl.removeEventListener('click', closeMenuBtnFun); //  видаляємо слухача з кнопки закриття
    burgerEl.addEventListener('click', showMenuMobile); //повертаємо слухача на бургер
    document.body.classList.remove('modal-open'); // Видаляємо клас, щоб не було скрола
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

function linkListenerBurger() {
  try {
    closeMenuBtnFun();
    burgerLinkEl.forEach(link => {
      link.removeEventListener('click', linkListenerBurger);
    }); // Видаляємо слухачів з посиланнь пунктів дроп меню
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

// ф-я показу меню таблет та десктоп
function showMenuTabletDesktop(event) {
  try {
    // menuItemEl.classList.add('active');
    // event.stopPropagation(); //зупиняємо евент, щоб неспрацювало закриття меню
    // document.addEventListener('click', closeMenuTabletDesktop);
    event.stopPropagation();

    if (menuItemEl.classList.contains('active')) {
      // Якщо меню вже відкрите — закриваємо
      menuItemEl.classList.remove('active');
      document.removeEventListener('click', closeMenuTabletDesktop);
    } else {
      // Інакше відкриваємо
      menuItemEl.classList.add('active');
      document.addEventListener('click', closeMenuTabletDesktop);
    }
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

function closeMenuTabletDesktop() {
  menuItemEl.classList.remove('active');
  document.removeEventListener('click', closeMenuTabletDesktop);
}
