"use strict";
// Это означает что код работает в современном
let message;
message = "Hello";
// Создал переменную и присвоил ей значение hello
alert(message);
let message2 = "mtfckr";
alert(message2);
const ratings = document.querySelectorAll('.rating')
// Проверяем на наличие рэйтингов и запускаем функцию
if (ratings.lenght > 0) {
  initRatings()
}
// Основная функция
function initRatings() {
  let ratingActive, ratingValue;
  // смотрим все рейтинги на странице
  for (var i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);
  }
  // Подрубаем нужный рейтинг
  function initRating(rating) {
    initRatingVars(rating);

    SetRatingActiveWidth();
  }
  // инициализация переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating_active');
    ratingValue = rating.querySelector('.rating_value');
  }
  // Изменение ширины активных звезд
  function SetRatingActiveWidth(i = ratingValue.innerHTML) {
    const ratingActiveWidth = i / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
}
