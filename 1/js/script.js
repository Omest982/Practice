//Показ Модал окна
$("#Enter").on("click", function () {
  $("#modal").css("display", "flex");
});
$("#close").on("click", function () {
  $("#modal").hide();
  $("#one")[0].checked = 0;
});

//Смена содержимого окна при выборе регистрации
let register = $("#nav-btn");
register.on("click", function () {
  if (register.html() === "Регистрация") {
    register.html("Вход");
    $("#nav-text").html("Регистрация");
    $("#login").css("display", "flex");
    $("#mod-btn").html("Зарегестрироватся");
    $("#check").show();
  } else if (register.html() === "Вход") {
    register.html("Регистрация");
    $("#nav-text").html("Вход");
    $("#login").hide();
    $("#mod-btn").html("Войти");
    $("#check").hide();
    $("#one")[0].checked = 0;
  }
});

//Выведение алерта при нажатии войти/зарегестрироватся
$("#mod-btn").on("click", function () {
  if ($("#nav-text").html() === "Регистрация" && $("#one")[0].checked) {
    alert("Вы зарегестрировались!");
  } else if ($("#nav-text").html() === "Регистрация") {
    alert("Подтвердите согласие");
  } else if ($("#nav-text").html() === "Вход") {
    alert("Вы вошли!");
  }
});
