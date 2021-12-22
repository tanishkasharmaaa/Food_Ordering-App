async function showDishes() {

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`)

    let data = await res.json();

    data = data.meals;

    appendDishes(data);
}

//Calling the Function
showDishes();

function appendDishes(data) {

    data.forEach((element) => {

        let { idMeal, strMeal, strCategory, strTags, strMealThumb } = element;

        let div = document.createElement('div');
        div.setAttribute('class', 'border shadow')

        let img = document.createElement('img');
        img.src = strMealThumb;
        img.setAttribute('class', 'img-fluid')

        let name = document.createElement('p');
        name.textContent = strMeal;
        name.setAttribute('class', 'ps-3 fs-4')

        let description = document.createElement('p');
        description.textContent = "Description : " + strCategory + ", " + strTags;
        description.setAttribute('class', 'ps-3')

        let price = document.createElement('p');
        price.textContent = "Price : ₹ " + (Number(idMeal) / 100);
        price.setAttribute('class', 'ps-3 fs-5')

        let addToCart = document.createElement('button');
        addToCart.textContent = "Add to Cart";
        addToCart.setAttribute('class', 'btn btn-outline-danger ms-3 mb-3');
        addToCart.onclick = function () {
            cartDetails(element)
        }

        div.append(img, name, description, price, addToCart)

        display.append(div);
    });
}

//LocalStorage 
if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
}

//Function for storing added to cart products details
function cartDetails(element) {

    let cartProducts = JSON.parse(localStorage.getItem('cart'));

    cartProducts.push(element);

    localStorage.setItem('cart', JSON.stringify(cartProducts));
}