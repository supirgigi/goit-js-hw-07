import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('ul.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img 
            class="gallery__image"
            src="${preview}" 
            alt="${description}" 
          />
        </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
