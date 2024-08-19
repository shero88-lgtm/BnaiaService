
// swiper js code 

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* feedback sec */ 

var carousel = document.querySelector('#carouselDarkVariant');
var carouselInstance = new mdb.Carousel(carousel, {
    interval: 3000,
    touch: true
});


/* pop for project view */ 


    document.getElementById('viewProjectBtn').addEventListener('click', function () {
        document.getElementById('popupContainer').style.display = 'flex';
    });

    document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('popupContainer').style.display = 'none';
    });

    document.getElementById('popupContainer').addEventListener('click', function (event) {
        if (event.target === document.getElementById('popupContainer')) {
            document.getElementById('popupContainer').style.display = 'none';
        }
    });



