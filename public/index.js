const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
    if(menu.classList.contains("invisible")){
        menu.classList.remove("invisible");
    } else {
        menu.classList.add("invisible");
    }
});