var menu = document.getElementById("menu-btn");

function changeNav() {
  menu.classList.toggle("change");
}

menu.onclick = function mobNav() {
  var mobnav = document.getElementById("mob-nav");
  if (mobnav.style.display === "block") {
    mobnav.style.display = "none";
    changeNav();
  } else {
    mobnav.style.display = "block";
    changeNav();
  }
};
