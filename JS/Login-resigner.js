let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let container = document.getElementById("container");

signUp.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    console.log("1");
});

signIn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

function show_password(target) {
    let input = document.getElementById("password-input");

    if (input.getAttribute("type") == "password") {
        target.classList.add("view");
        input.setAttribute("type", "text");
    } else {
        target.classList.remove("view");
        input.setAttribute("type", "password");
    }
    return false;
}