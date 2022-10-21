import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('div.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', onGalleryElementClick);

function createGalleryMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img 
            class="gallery__image"
            src="${preview}" 
            data-source="${original}" 
            alt="${description}" 
          />
        </a>
      </div>`;
    })
    .join('');
}

function onGalleryElementClick(e) {
  e.preventDefault();

  const isGalleryElement = e.target.classList.contains('gallery__image');

  if (!isGalleryElement) {
    return;
  }

  const lightboxInstance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);

  lightboxInstance.show();

  const visible = lightboxInstance.visible();

  if (visible) {
    galleryRef.addEventListener('keydown', function onKeyPress(e) {
      if (e.code === 'Escape') {
        lightboxInstance.close();
        galleryRef.removeEventListener('keydown', onKeyPress);
      }
    });
  }
}
