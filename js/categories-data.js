const categories = [
  { id: 1, name: "Fruit", image: "../assets/images/catigoies/1.png" },
  { id: 2, name: "Bakery", image: "../assets/images/catigoies/2.png" },
  {
    id: 3,
    name: "Vegetable",
    image: "../assets/images/catigoies/3.png",
  },
  { id: 4, name: "Dairy", image: "../assets/images/catigoies/4.png" },
  { id: 5, name: "Meat", image: "../assets/images/catigoies/5.png" },
  {
    id: 6,
    name: "Dessert",
    image: "../assets/images/catigoies/6.png",
  },
  {
    id: 7,
    name: "Fast food",
    image: "../assets/images/catigoies/7.png",
  },
  {
    id: 8,
    name: "Breakfast",
    image: "../assets/images/catigoies/8.png",
  },
  { id: 9, name: "Lunch", image: "../assets/images/catigoies/9.png" },
  {
    id: 10,
    name: "boy",
    image: "../assets/images/catigoies/10.png",
  },
  {
    id: 10,
    name: "bek",
    image: "../assets/images/catigoies/11.png",
  },
 
];

const catalogy = document.querySelector(".catalogy");

function displaycatalogy(categories) {
  let str = "";
  categories.forEach((produc) => {
    str += `
    <div class= "box">
      <img class="box__img" src="${produc.image}" alt="${produc.name}">
    </div>  
    `;
  });
  catalogy.innerHTML = str;
}
displaycatalogy(categories);



newArray = [];

document.getElementById("search").addEventListener("keyup", function(){
  let search = this.value.toLocaleLowerCase();
  newArray = array.filter(function(val){

    if(val.id.includes(search) || val.name.includes(search)){

      let newobj = {id : val.id, name: val.name};
      return newobj;
    }
  })
  showtable(newArray)
})