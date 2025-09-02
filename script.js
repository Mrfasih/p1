const navv= document.querySelector("#navv");
const end = document.querySelector(".end")
window.addEventListener("scroll", () => {
if (window.scrollY >
    end.offsetTop - navv.offsetHeight - 50) {
    navv.classList.add("active");
}
else{
    navv.classList.remove("active");
}
});