const tabButtons= document.querySelectorAll(".tabs button");
const containers= document.querySelectorAll('.tab-container');
const tabItems= document.querySelectorAll('.items li');
console.log(tabItems)
for(let tabButton of tabButtons){
      tabButton.addEventListener('click', function(event){
           for(tabContainer of containers){
              tabContainer.classList.remove('active')
           }
           let getId= event.target.getAttribute("data-tab")
           document.getElementById(getId).classList.add('active')
      })
}
for(let tabItem of tabItems){
      tabItem.addEventListener('click', function(event){
           for(tabContainer of containers){
              tabContainer.classList.remove('active')
           }
           let getId= event.target.getAttribute("data-tab")
           document.getElementById(getId).classList.add('active')
      })
}
