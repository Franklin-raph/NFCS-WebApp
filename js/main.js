$('.counter').counterUp({
    delay:20,
    time: 9000
  });
  $(window).on('load', function(){
    new WOW().init(); 
});

// const nameField = document.querySelector("#name")
// const emailField = document.querySelector("#email")
// const messageField = document.querySelector("#message")
// const submitBtn = document.querySelector("#sendMailBtn")



// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault()
//   console.log(nameField.value)
//   console.log(emailField)
//   console.log(messageField)
// })