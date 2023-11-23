import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImage } from './js/pixaAPI';
import markupGallery from './js/markupGallery';

const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('input'),
  gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', handleSearch);

const onImages = new SimpleLightbox('.js-gallery a', {
  captionDelay: 250,
});

async function handleSearch(e) {
  e.preventDefault();
  console.log(refs.input.value);
  const data = await getImage(refs.input.value);
  const collection = data.data.hits;
  refs.gallery.insertAdjacentHTML('beforeend', markupGallery(collection));
  //   onImages.refresh();
}
