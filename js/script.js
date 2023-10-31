function handleSubmit() {
  const emailValue = document.querySelector("#email").value.toLocaleLowerCase();
  const errorEmail = document.querySelector("#error-email");
  // kiểm tra xem email có đúng với định dạng
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmail = emailValue.match(regex);
  const sectionContent = document.querySelector(".information");
  const identifyEmail = document.querySelector("#identify");
  console.log(sectionContent);
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    errorEmail.innerHTML = "";
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
  } else {
    identifyEmail.style.display = "none";
    errorEmail.innerHTML = "Email chưa chính xác. Vui lòng nhập lại";
  }
}

let buttons = document.querySelectorAll(".view-more");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", function () {
    let parent = buttons.closest(".job-box-grid");
    let chitiet = parent.querySelector(".job-content");
    const jobContent = document.querySelector(".hidden");
    console.log(jobContent);
    if (chitiet.style.display == "none") {
      chitiet.classList.remove(".hidden");
      chitiet.style.display = "block";
      this.innerHTML = "▲ View less";
    } else {
      chitiet.style.display = "none";
      this.innerHTML = "▼ View more";
    }
  });
});
