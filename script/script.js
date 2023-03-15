// --------------------get all the buttons--------------------------------
var plusButton = document.querySelectorAll('.btnPlus');
let deleteButton = document.querySelectorAll('.btn-outline-danger');
let heartIcons = document.querySelectorAll('.fa-heart');
let article = document.querySelectorAll('.article')
let qty = document.querySelectorAll('.quantite')
let total = document.querySelectorAll('.total')
let price = document.querySelectorAll('.prix')
let mns = document.querySelectorAll('.btn-outline-warning')
let sum = document.querySelector('.Prixtotal')
// -----------------calculate the total price of the products---------------
function calculateTotal() {
  let totalPrice = 0;
  for (let i = 0; i < article.length; i++) {
    let itemPrice = parseInt(price[i].innerHTML);
    let itemQty = parseInt(qty[i].value);
    let itemTotal = itemPrice * itemQty;
    total[i].innerHTML = itemTotal;
    totalPrice += itemTotal;
  }
  sum.value = totalPrice;
  console.log(article);
}
// ----------------add a click event listener to each plus button----------
for (let i = 0; i < plusButton.length; i++) { 
  plusButton[i].addEventListener('click', function(){
    qty[i].value ++ ;
    calculateTotal();
  });
  // -------------add a click event listener to each minus button-------------
  mns[i].addEventListener('click' , function(){
    if(qty[i].value > 0){
      qty[i].value --;
      calculateTotal();
    }
  })
  // -------------add a click event listener to each delete button------------
  deleteButton[i].addEventListener('click' , function(){
    article[i].remove();
    let articlePrice = parseInt(price[i].innerHTML) * parseInt(qty[i].innerHTML);
    let currentTotal = parseInt(sum[0].value);
    sum[0].value = currentTotal - articlePrice;
    calculateTotal()
  })
}
// -----------add a click event listener to each heart icon------------
heartIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    // toggle the 'liked' class on the clicked icon
    icon.classList.toggle('liked');
  });
});
// -------------------calculate the initial total price on page load------------------
calculateTotal(); 




