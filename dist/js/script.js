"use strict"

function ibg(){
  let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
    }
}

ibg();
  


$(document).ready( function() {
  $('.multiple-items').on('init reInit', function(event, slick) {
    $('.slider__counter p').text(1 + ' / ' + slick.slideCount);
  })
  $('.multiple-items').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('.slider__counter p').text(currentSlide + 1 + ' / ' + slick.slideCount);
  });

  $('.multiple-items').slick({
    centerMode: true,
    arrow:false,
    centerPadding:'50px',
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight:true,
    infinite: true,
    variableWidth: true,
    responsive: [
	    {
	      breakpoint: 900,
	      settings: {
          arrow:false,
	        slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: true,
          centerPadding:'0px',
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
          arrow:true,
	        slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: true,
          centerPadding:'0px',
	      }
	    }
    ]
  });



  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    }
    else{
      document.querySelector('body').classList.add('no-webp');
    }
});

const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || 
      isMobile.BlackBerry() || 
      isMobile.iOS() || 
      isMobile.Opera() || 
      isMobile.Windows());
  }
};

if(isMobile.any()) {
  document.body.classList.add('_touch');
}
else {
  document.body.classList.add('_pc');
}

//меню бургер
const iconMenu=document.querySelector('.menu__icon');
const menuBody=document.querySelector('.menu__body');
if(iconMenu){
  iconMenu.addEventListener('click',function(e){
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}
});






  
  