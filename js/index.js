
const btnButger = document.querySelector("#burger");
const header = document.querySelector("header");

btnButger.addEventListener("click", () => {
    if(header.classList.contains("open")) {
        header.classList.remove("open");
        document.body.style.overflow = "";
    } else {
        header.classList.add("open");
        document.body.style.overflow = "hidden";
    }
})
