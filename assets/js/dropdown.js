/* mobile nav */
const openMenu = document.querySelector(".menuBar");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".bg-overlay");
const closeMenu = document.querySelector(".svg");
openMenu.addEventListener("click", function () {
  mobileNav.classList.add("open");
  overlay.classList.add("open");
  console.log("Hello");
});
closeMenu.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  overlay.classList.remove("open");
});

/* Category */
const categoryBox = document.querySelector(".category-box");
const categoryItems = document.querySelector(".category-items");
const categoryItem = document.querySelectorAll(".category-items li");
const categoryText = document.querySelector(".category-text");
categoryBox.addEventListener("click", function () {
  categoryItems.classList.toggle("active");
});
for (option of categoryItem) {
  option.addEventListener("click", function (event) {
    let getItem = event.target.textContent;
    console.log(getItem);
    categoryItems.classList.remove("active");
  });
}

/* Dropdown */
const selectBox = document.querySelector(".select-box");
const items = document.querySelector(".items");
const item = document.querySelectorAll(".items li");
const selectText = document.querySelector(".select-text");
selectBox.addEventListener("click", function () {
  items.classList.toggle("active");
});

for (option of item) {
  option.addEventListener("click", function (event) {
    let getOption = event.target.textContent;
    selectText.textContent = getOption;
    items.classList.remove("active");
  });
}
