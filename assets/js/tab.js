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
console.log(categoriesItems)
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

