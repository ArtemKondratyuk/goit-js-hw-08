import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const ulEl = document.querySelector(".gallery");
function createGalleryMarkUp(items){
   return items.map((item)=>
   `<li class="gallery__item">
   <a class="gallery__link" 
   href ="${item.original}">
   <img
   class="gallery__image" 
   src="${item.preview}"
   data-source="${item.original}"
   alt="${item.description}"/></a></li>`).join("");
}
const addGalleryMarkUp = createGalleryMarkUp(galleryItems);
ulEl.innerHTML = addGalleryMarkUp;
let lightbox = new SimpleLightbox('.gallery a', { 
   captionDelay:250,
   captionsData: "alt",
   enableKeyboard: true,
   close: true,
});
