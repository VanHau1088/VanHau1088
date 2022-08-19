let form = document.getElementById("form");
let container = document.querySelector(".contact-container");
let input1 = document.querySelector(".input1").innerHTML;
let input2 = document.querySelector(".input2").innerHTML;
let input3 = document.querySelector(".input3").innerHTML;
let input4 = document.querySelector(".input4").innerHTML;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    container.innerHTML =
        "<p>Thanks for your message. <br /> I'll get back to you soon. 😃</p>";
});