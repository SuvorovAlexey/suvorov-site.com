$(function() {

    /*разлет тегов №1*/
  function changeClass()
   {
      $('.tags').addClass('active-new');
    }  
      setTimeout(changeClass, 500);

      /*меню-бургер кнопка*/
  	$('.page-header__burger').click(function() {

          $('.nav-block').toggleClass('nav-block--new');
          $('.nav').toggleClass('nav--new');
          $('.nav__item').toggleClass('nav__item--2');
      });





    /*фиолетовая кнопка заказа звонка - хедер*/
    $('.add-button').click(function() {
          $('.popup-change-purple').toggleClass('popup-background');
          $('.popup-change-purple').toggleClass('popup-background--purple');
          $("body").css("overflow-y","hidden");
      });

    $('.popup-change-purple').click(function(event) {
          if(event.target == this) {
            $(this).toggleClass('popup-background');
          }
      });
    $('.popup-change-purple').click(function(event) {
          if(event.target == this) {
            $(this).toggleClass('popup-background--purple');
          }
      });
    $('.popup-change-purple').click(function(event) {
          $("body").css("overflow-y","auto");
      });
   



    /*оранжевая кнопка уточнения информации*/
    $('.add-button-orange').click(function() {
          $('.popup-change-orange').toggleClass('popup-background');
          $('.popup-change-orange').toggleClass('popup-background--orange');
          $("body").css("overflow-y","hidden");
      });

    $('.popup-change-orange').click(function(event) {
          if(event.target == this) {
            $(this).toggleClass('popup-background');
          }
      });
    $('.popup-change-orange').click(function(event) {
          if(event.target == this) {
            $(this).toggleClass('popup-background--orange');
          }
      });
    $('.popup-change-orange').click(function(event) {
          $("body").css("overflow-y","auto");
      });
  
});


$(function() {

  /*разлет тегов №2*/
    function changeClass()
     {
        $('.tags2').addClass('active-new');
      }  
        setTimeout(changeClass, 500);
  });



  /*ТОЧКИ ДЛЯ СЛАЙДЕРА*/

$(function() {

class SiemaWithDots extends Siema {

      addDots() {

        /*кнопки для слайдера */
        document.querySelector('.slider__button--left').addEventListener('click', () => mySiemaWithDots.prev());
        document.querySelector('.slider__button--right').addEventListener('click', () => mySiemaWithDots.next());
        
        // create a contnier for all dots
        // add a class 'dots' for styling reason
        this.dots = document.createElement('div');
        this.dots.classList.add('slider__paginator', 'paginator');

        // loop through slides to create a number of dots
        for(let i = 0; i < this.innerElements.length; i++) {
          // create a dot
          const dot = document.createElement('button');

          // add a class to dot
          dot.classList.add('paginator__item');

          // add an event handler to each of them
          dot.addEventListener('click', () => {
            this.goTo(i);
          })

          // append dot to a container for all of them
          this.dots.appendChild(dot);
        }

        // add the container full of dots after selector
        this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
      }

      updateDots() {
        // loop through all dots
        for(let i = 0; i < this.dots.querySelectorAll('button').length; i++) {
          // if current dot matches currentSlide prop, add a class to it, remove otherwise
          const addOrRemove = this.currentSlide === i ? 'add' : 'remove';
          this.dots.querySelectorAll('button')[i].classList[addOrRemove]('paginator__item--active');
        }
      }
    }

    // instantiate new extended Siema
    const mySiemaWithDots = new SiemaWithDots({

      // on init trigger method created above
      perPage: {
          1289:3,
          911:2,
          320:1},
        loop: true,

      onInit: function(){
        this.addDots();
        this.updateDots();
      },

      // on change trigger method created above
      onChange: function(){
        this.updateDots()
      },
    });

  });

