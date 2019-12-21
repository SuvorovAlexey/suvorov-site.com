$(function(){function changeClass()
{$('.active').addClass('active-new');}
setTimeout(changeClass,500);$('.page-header__button2').click(function(){$('.nav-block').toggleClass('nav-block--new');$('.nav').toggleClass('nav--new');$('.nav__item').toggleClass('nav__item2');});});