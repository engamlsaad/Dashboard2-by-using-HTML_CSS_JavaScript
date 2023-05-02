let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
menu.onclick = function () {
    menu.classList.toggle("show");
    sidebar.classList.toggle("hide");
}

// window.addEventListener("resize", function () {
//     if (window.innerWidth < 992) {
//         sidebar.classList.remove("hide");
//     } else {
//         sidebar.classList.add("hide");
//     }
// })