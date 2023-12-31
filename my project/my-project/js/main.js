// document.addEventListener("DOMContentLoaded", function(event){
//  const modal = document.querySelector('.modal');
//  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//  const closeBtn = document.querySelector('.modal__close');
//  const switchModal = () => {
//   modal.classList.toggle('modal--visible'); 
//  }
//  modalBtn.forEach(element => {
//   element.addEventListener('click', switchModal );
//  });

//  closeBtn.addEventListener('click', switchModal);

// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
   modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function (){
   modal.toggleClass('modal--visible');
  });

  var swiper = new Swiper('.swiper', {
   loop: true,
   pagination: {
     el: '.swiper-pagination',
     type: 'bullets',
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  // Валидация формы 
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило 
      userName: "required",
      userPhone: "required",

      // правило-бъект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения 
    messages: {
      userName: "Имя обязательно",
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Oбязательно укажите email",
        email: "Введите в формате name@domain.com"
      }
    }
  });

  // маска для номера телефона 
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder:"+7(___)___-__-__"});
  // создание yandex карты 
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
      // создание карты 
    var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
    }

});

$(function(){
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});