//Показ Модал окна
let btn = document.getElementById("Enter");
let modal = document.getElementById("modal");
btn.addEventListener("click", function () {
  modal.style.visibility = "visible";
});
let modal_btn = document.getElementById("close");
modal_btn.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  document.getElementById("one").checked = 0;
});

//Смена содержимого окна при выборе регистрации
let register = document.getElementById("nav-btn");
register.addEventListener("click", function () {
  if (register.innerHTML === "Регистрация") {
    register.innerHTML = "Вход";
    document.getElementById("nav-text").innerHTML = "Регистрация";
    document.getElementById("login").style.display = "flex";
    document.getElementById("mod-btn").innerHTML = "Зарегестрироватся";
    document.getElementById("check").style.display = "block";
  } else if (register.innerHTML === "Вход") {
    register.innerHTML = "Регистрация";
    document.getElementById("nav-text").innerHTML = "Вход";
    document.getElementById("login").style.display = "none";
    document.getElementById("mod-btn").innerHTML = "Войти";
    document.getElementById("check").style.display = "none";
    document.getElementById("one").checked = 0;
  }
});

//Выведение алерта при нажатии войти/зарегестрироватся
document.getElementById("mod-btn").addEventListener("click", function () {
  if (document.getElementById("nav-text").innerHTML === "Регистрация" && document.getElementById("one").checked) {
    alert("Вы зарегестрировались!");
  } else if(document.getElementById("nav-text").innerHTML === "Регистрация"){
    alert("Подтвердите согласие");
  }else if (document.getElementById("nav-text").innerHTML === "Вход") {
    alert("Вошли!");
  }
});
