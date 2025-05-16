product = [
    {
    "id": 1,
    "name": "Product 1",
    "price": 10.00,
    "description": "Description for Product 1",
    "image": "https://via.placeholder.com/150"
},{
    "id": 2,
    "name": "Product 2",
    "price": 20.00,
    "description": "Description for Product 2",
    "image": "https://via.placeholder.com/150"
},{
    "id": 3,
    "name": "Product 3",
    "price": 30.00,
    "description": "Description for Product 3",
    "image": "https://via.placeholder.com/150"
},{
    "id": 4,
    "name": "Product 4",
    "price": 40.00,
    "description": "Description for Product 4",
    "image": "https://via.placeholder.com/150"
},{
    "id": 5,
    "name": "Product 5",
    "price": 50.00,
    "description": "Description for Product 5",
    "image": "https://via.placeholder.com/150"
},{
    "id": 6,
    "name": "Product 6",
    "price": 60.00,
    "description": "Description for Product 6",
    "image": "https://via.placeholder.com/150"
}
]

const productlist = document.getElementById('product-list');

product.forEach(product => {
    const productcard = ` <div class="bg-white rounded-lg shadow-md p-4">
                    <img src="${product.image}" alt="Product Image" class="rounded-md mb-4 w-full h-40 object-cover">
                    <h2 class="text-lg font-semibold mb-2">${product.name}</h2>
                    <p class="text-gray-600 mb-4">${product.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xl font-bold text-green-600">$${product.price.toFixed(2)}</span>
                    </div>
                </div>
            `;

    productlist.innerHTML = productlist.innerHTML + productcard;
});