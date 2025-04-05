const burgerEl = document.querySelector('.header-burger');
const dropdownEl = document.querySelector('.header-dropdown-wrapper');
const closeMenuBtnEl = document.querySelector('.header-close-btn');

// Додаємо слухача одразу
burgerEl.addEventListener('click', showMenuMobile);

function showMenuMobile() {
  try {
    dropdownEl.classList.add('active'); // Показуємо меню
    closeMenuBtnEl.addEventListener('click', closeMenuBtnFun); // Додаємо слухач до кнопки закриття
    burgerEl.removeEventListener('click', showMenuMobile); // Видаляємо слухач з бургеру, щоб уникнути повторних кліків
    console.log('closeLisener added, burgerLisener  closed');
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}

function closeMenuBtnFun() {
  try {
    dropdownEl.classList.remove('active'); // Приховуємо меню
    closeMenuBtnEl.removeEventListener('click', closeMenuBtnFun); //  видаляємо слухача з кнопки закриття
    burgerEl.addEventListener('click', showMenuMobile); //повертаємо слухача на бургер
    console.log('closeLisener closed, burgerLisener added');
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}
