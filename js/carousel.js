/*
По порядку:
1. $ - относится к библиотеке jQuery, предоставляет удобный синтаксис для работы с DOM
2. Внутри $ - название класса, с которым будут происходить разные манипуляции
3. slick - кастомный метод библиотеки slick.js, она принимает объект с настройками слайдера, их может быть очень много,
но я взял некоторые
 */

$('.portfolio').slick({
  dots: true, // Отображение кликабельный точек-страниц, на которые можно кликать при работе со слайдером
  infinite: true, // Слайдер будет бесконечным - если мы упремся в конец слайдов, то следующим слайдом будет показан первый
  slidesToShow: 2, // Число слайдов в одном ряду
  slidesToScroll: 2, // Число слайдов, которое будет проскроллено при смене слайда
  speed: 300, // Скорость смены слайдов в миллисекундах
  cssEase: 'ease-in-out' // функция, с которой будет происходить смена слайдов. Обычная CSS-анимация, без излишеств)
});
