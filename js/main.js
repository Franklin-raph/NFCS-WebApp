$('.counter').counterUp({
    delay:20,
    time: 9000
  });
  $(window).on('load', function(){
    new WOW().init(); 
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:3000,
  nav:true,
  navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:3,
      },
      1000:{
          items:5,
      }
  }
})

// Email.send({
//   Host : "smtp.yourisp.com",
//   Username : "username",
//   Password : "password",
//   To : 'them@website.com',
//   From : "you@isp.com",
//   Subject : "This is the subject",
//   Body : "And this is the body"
//   }).then(
//     message => alert(message)
//   );