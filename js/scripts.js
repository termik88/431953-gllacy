var link = document.querySelector(".feedback-link");
      
      var popup = document.querySelector(".modal-feedback");
      var close = popup.querySelector(".modal-close");
      
      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=feedback-name]");
      var password = popup.querySelector("[name=feedback-email]");
      
      var storage = localStorage.getItem("login");
      
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        
        if (storage) {
          login.value = storage;
          password.focus();
        } else {
          login.focus();
        }
      });
      
      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      });
      
      form.addEventListener("submit", function (evt) {
        if (!login.value || !password.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("feedback-name", login.value);
        }
      });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  })