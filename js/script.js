import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { filterProducts } from "./ui/filterProducts.js";
import { infoMessage } from "./ui/infoMessage.js";

const url = "https://fakestoreapi.com/products";
const search = document.querySelector(".search");
 async function makeApiCall(){
  try{
      const response = await fetch(url);
      const products = await response.json();
      console.log(products)
     
      searchProducts(products)
      filterProducts(products)
      renderProducts(products)
      

  } catch (error){
      console.log(error);
      infoMessage("error", error, ".product-container")
  }
 }
 makeApiCall();

