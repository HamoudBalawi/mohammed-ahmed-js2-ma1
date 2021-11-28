import { renderProducts } from "./renderProducts.js";
export function filterProducts(products){
    const filter = document.querySelector(".filter")
filter.onkeyup = function (event){
    const filterValue = event.target.value;
    const filteredProducts = products.filter(function (product){
        if(product.price <= filterValue){
            return true;
        }
    })
    renderProducts(filteredProducts);
}
}