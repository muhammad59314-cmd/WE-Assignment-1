// 1. Skills tabs (technical / soft skills)
var tabs = document.querySelectorAll(".tab");
var boxes = document.querySelectorAll(".skillbox");

function showTab(id) {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("show");
  }
  for (var j = 0; j < tabs.length; j++) {
    tabs[j].classList.remove("active");
  }
  document.getElementById(id).classList.add("show");
}

for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function () {
    showTab(this.getAttribute("data-target"));
    this.classList.add("active");
  };
}

// show technical skills first
showTab("tech");
tabs[0].classList.add("active");

// 2. Change the theme color
var colors = ["#0f766e", "#9a3412", "#4338ca", "#be185d", "#166534"];
var colorIndex = 0;

document.getElementById("colorBtn").onclick = function () {
  colorIndex = colorIndex + 1;
  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }
  document.documentElement.style.setProperty("--main", colors[colorIndex]);
};

// 3. Menu button on small screens
document.getElementById("menuBtn").onclick = function () {
  document.querySelector("#sidebar ul").classList.toggle("show");
};
