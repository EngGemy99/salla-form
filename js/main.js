//!(start) to handle show and hide password icon
document.onclick = function (event) {
  if (event.target.localName == "i") {
    let inputElement = event.target.parentElement.querySelector("input");
    if (event.target.className == "fa-regular fa-eye") {
      event.target.className = "fa-regular fa-eye-slash";
      //? to catch input
      inputElement.setAttribute("type", "text");
    } else {
      event.target.className = "fa-regular fa-eye";
      //? to catch input
      inputElement.setAttribute("type", "password");
    }
  }
};
//!(end) to handle show and hide password icon

//!start handle switch between login / register form
let switchButtonsControl = document.querySelector(".switchButtonsControl");
let registerForm = document.querySelector(".registerForm");
let loginForm = document.querySelector(".loginForm");
let headerForm = document.querySelectorAll(".headerForm");
switchButtonsControl.onclick = function (event) {
  //* to remove class active from switch button
  for (const element of this.children) {
    element.classList.remove("active");
  }
  event.target.classList.add("active");
  if (event.target.classList.contains("switchLoginForm")) {
    document.title = "تسجيل الدخول";
    for (const element of headerForm) {
      element.innerHTML = `
        <h2>
            يوم جديد
            <br>
            لتحقق انطلاقتك في تجارتك
        </h2>
    `;
    }
    registerForm.classList.add("hide");
    loginForm.classList.remove("hide");
  } else {
    document.title = "تسجيل ";

    for (const element of headerForm) {
      element.innerHTML = `
        <h2>
            كل ما تحتاجه لتنمو بتجارتك الإلكترونية
        </h2>
        <p>سجل الآن وانضم لأكثر من 30 ألف متجر يستفيد من مئات الخدمات اللوجيستية والأدوات التسويقية المتكاملة في منصة سلة</p>
    `;
    }
    registerForm.classList.remove("hide");
    loginForm.classList.add("hide");
  }
};
//!end handle switch between login / register form

//!start handle validation for all input
document.addEventListener("click", (event) => {
  if (event.target.localName == "input") {
    event.target.onblur = function () {
      let errorElement = event.target.parentElement.querySelector(".error");
      if (event.target.value == "") {
        event.target.classList.add("redBorder");
        errorElement.classList.remove("hide");
      } else {
        event.target.classList.remove("redBorder");
        errorElement.classList.add("hide");
      }
    };
  }
});
//!end handle validation for all input
