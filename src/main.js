import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImage } from './js/pixaAPI';
import markupGallery from './js/markupGallery';

const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('input'),
  gallery: document.querySelector('.gallery'),
  loadBtn: document.querySelector('.js-load-btn'),
};

refs.form.addEventListener('submit', handleSearch);
refs.loadBtn.addEventListener('click', handleLoadMore);

const onImages = new SimpleLightbox('.js-gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

let currentQuery = '';
let page = 1;

async function handleSearch(e) {
  e.preventDefault();
  clearPage();
  
  const query = refs.input.value.trim().toLowerCase();

  if (!query) {
    iziToast.show({
      title: 'Ops!',
      message: 'Enter something to search!',
      position: 'topRight',
    });
    return;
  }

   if ((currentQuery === query)) {
     iziToast.show({
       title: 'Ops!',
       message: 'Enter something to search!',
       position: 'topRight',
     });
     return;
   }

  currentQuery = query;

  try {
    const data = await getImage(currentQuery, page);

    const allCollection = data.data.totalHits;
    const collection = data.data.hits;

    if (allCollection === 0) {
      iziToast.show({
        title: 'Ops!',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }

    refs.gallery.insertAdjacentHTML('afterbegin', markupGallery(collection));
    iziToast.show({
      title: 'Hey',
      message: `Hooray! We found ${allCollection} images.`,
      position: 'topRight',
    });

    onImages.refresh();
  } catch (error) {
    clearPage();
  }
}

async function handleLoadMore(e) {
  e.preventDefault();
  page += 1;
  const data = await getImage(currentQuery, page);
  const collection = data.data.hits;
  refs.gallery.insertAdjacentHTML('beforeend', markupGallery(collection));
}

function clearPage() {
  refs.gallery.innerHTML = '';
  currentQuery = '';
  page = 1;
}

const scrollPage = () => {
  const { height: cardHeight } =
    imgContainer.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};
