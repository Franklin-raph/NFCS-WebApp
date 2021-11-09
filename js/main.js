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

// const nodemailer = require('nodemailer')


// const transporter = nodemailer.createTransport({
//   service: 'hotmail',
//   auth: {
//     user: 'igboekwulusifranklin@outlook.com',
//     pass: 'emmaofmcap@7'
//   }
// });

// let digitCode = Math.floor(100000 + Math.random() * 900000)

// const mailOptions = {
//   from: 'igboekwulusifranklin@outlook.com',
//   to: 'igboekwulusifranklin@gmail.com',
//   subject: 'Sending Email using Node.js',
//   html: `<h1>Your code is: <br />${digitCode}</h1>`
// };

// transporter.sendMail(mailOptions, (error, info)=>{
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// document.querySelector('#verifyBtn').addEventListener('click', ()=>{
//   transporter();
// })




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