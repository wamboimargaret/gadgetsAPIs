let productContainer = document.getElementById('offers')
// ?limit=5

const getProduct = ()=>{
    return fetch('https://dummyjson.com/products')
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error.message)
};
getProduct();

const displayProduct = async ()=>{
    const products = await getProduct();
    console.log(products.products);
    products.products.map(item=>{
        let div = document.createElement('div');
        div.className = 'products';

        let img = document.createElement('img');
        let title = document.createElement('h2');
        let description = document.createElement('p');
        let price = document.createElement('p');
        let discountPercentage = document.createElement('p');
        // let rating = document.rating('p');

        img.src = item.images;
        title.innerHTML = item.title;
        description.innerHTML = item.description;
        price.innerHTML = item.price;
        discountPercentage.innerHTML = item.discountPercentage;
        // rating.innerHTML = item.rating;
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(price);
        div.appendChild(discountPercentage);
        // div.appendChild(rating);
        productContainer.appendChild(div);
    })
}
displayProduct();
