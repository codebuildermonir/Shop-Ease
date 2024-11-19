const tabButtons = document.querySelectorAll(".tabs button");
const containers = document.querySelectorAll(".tab-container");
const tabItems = document.querySelectorAll(".items li");
for (let tabButton of tabButtons) {
  tabButton.addEventListener("click", function (event) {
    for (tabContainer of containers) {
      tabContainer.classList.remove("active");
    }
    let getId = event.target.getAttribute("data-tab");
    document.getElementById(getId).classList.add("active");
  });
}
for (let tabItem of tabItems) {
  tabItem.addEventListener("click", function (event) {
    for (tabContainer of containers) {
      tabContainer.classList.remove("active");
    }
    let getId = event.target.getAttribute("data-tab");
    document.getElementById(getId).classList.add("active");
  });
}
/* Shop page */
const categoriesItems = document.querySelectorAll(".categories-items li");
console.log(categoriesItems);
const allContainer = document.querySelector(".allContainer");
const allContainers = allContainer.querySelectorAll(".card-container");
for (categoriesItem of categoriesItems) {
  categoriesItem.addEventListener("click", function (event) {
    for (container of allContainers) {
      container.classList.remove("active");
    }
    let getId = event.target.getAttribute("data-tab");
    document.getElementById(getId).classList.add("active");
  });
}

/* Shop mobile category */
const shopCategoryOpen = document.querySelector(".mobileIconOpen");
const shopCategoryClose = document.querySelector(".mobileIconClose");
const shopCategoryItems = document.querySelector(".mobileCategoryItems");
shopCategoryOpen.addEventListener("click", function () {
  shopCategoryItems.classList.add("openCategory");
});
shopCategoryClose.addEventListener("click", function () {
  shopCategoryItems.classList.remove("openCategory");
});

/* Sort */
const sort = document.querySelector(".sort");
const sortBox = document.querySelector(".sort-box");
const sortLists = sortBox.querySelectorAll("li");
sort.addEventListener("click", function () {
  sortBox.classList.toggle("active-sort");
});

for (sortList of sortLists) {
  sortList.addEventListener("click", function () {
    sortBox.classList.toggle("active-sort");
  });
}
