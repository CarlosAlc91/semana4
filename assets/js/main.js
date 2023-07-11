/* 
*DATA BASE 
*/

const fruits = [
  {
    id: 1,
    icon: '🍎',
    name: 'Apple',
    price: 2.5
  },
  {
    id: 2,
    icon: '🍌',
    name: 'Banana',
    price: 1.5
  },
  {
    id: 3,
    icon: '🍊',
    name: 'Orange',
    price: 2
  },
  {
    id: 4,
    icon: '🍇',
    name: 'Grape',
    price: 3
  },
  {
    id: 5,
    icon: '🍉',
    name: 'Watermelon',
    price: 4
  },
  {
    id: 6,
    icon: '🍓',
    name: 'Strawberry',
    price: 2.5
  },
]

/* 
<!-- MAIN PRODUCT -->
        <article class="product">
          <!-- PRODUCT IMAGE -->
          <div class="product__img">
            <!-- PRODUCT ICON -->
            <span class="icon">🥭</span>
            <!-- BUTTON -->
            <button class="btn" type="button">add</button>
          </div>
          <!-- PRODUCT BODY -->
          <div class="product__body">
            <!-- PRODUCT NAME -->
            <h2 class="product__title">Mango</h2>
            <!-- PRODUCT PRICE -->
            <span class="product__price">$2.5</span>
          </div>
        </article>

*/

/* 
* EVERYTHING WILL BE CHANGED INTO A STRING
* WE'RE HANDLILNG TEXT 
*/
/* 
*  DOM METHODS
* LOOKING FOR OPRODUCT CONTAINER
*/

/* 
* BRING ALL ELEMENTS FROM ARRAY FRUITS AND HTML
*/
const container = document.getElementById('containerProducts')
/* create an empty html to bring information from ID */
let html = ''

for (const fruit of fruits) {
  html += `
  <article class="product">
    <div class="product__img">
      <span class="icon">${fruit.icon}</span>
      <button class="btn" type="button">add</button>
    </div>
    <div class="product__body">
      <h2 class="product__title">${fruit.name}</h2>
      <span class="product__price">${fruit.price}</span>
    </div>
  </article>
  `
}

/* INNER HTML, I WANT TO KNOW YOUR CONTENT INTERNALLY */
console.log(container.innerHTML)
/* this will bring up all the information from fruits array */
container.innerHTML = html


/* ADDING PRODUCTS TO CART */
/* WHEN I MOVE SOMETHING IT HAS TO SHOW */
const cart = []

const cartContainer = document.getElementById('containerArticles')

let ul = ''

for (const fruit of cart) {
  ul += `
  
  <li>${fruit.name} - ${fruit.price}</li>
  `
}

ul += '</ul>'

cart.cartContainer.innerHTML = ul



