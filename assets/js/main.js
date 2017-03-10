// Validación del login
window.addEventListener('load',function() {
  var loginButton = document.getElementById('login');
  loginButton.addEventListener('click',function(event) {
      event.preventDefault();
      var email           = document.getElementById("email").value;
      var password        = document.getElementById("password").value;
      var mensajeEmail    = document.getElementById("mensaje-email");
      var mensajePassword = document.getElementById("mensaje-password");

       if(email.length == 0){
          mensajeEmail.style.display ="block";
       }
       if(password.length == 0){
          mensajePassword.style.display = "block";
       }
       if (password.length<6) {
         mensajePassword.style.display = "block";
       }
       if (email == "karin_alejo@hotmail.com" && password.length>6) {
            window.location="muro.html";
       }
  });
});
