import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImage from './js/pixaAPI';
import markupGallery from './js/markupGallery';

const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('input'),
  gallery: document.querySelector('.gallery'),
  loadBtn: document.querySelector('.js-load-btn'),
  logo: document.querySelector('.js-pixa'),
};

function showElement(element, isVisible) {
  element.classList.toggle('hidden', !isVisible);
}

refs.form.addEventListener('submit', handleSearch);
refs.loadBtn.addEventListener('click', handleLoadMore);

showElement(refs.loadBtn, false);
showElement(refs.logo, true);

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

  if (currentQuery === query) {
    iziToast.show({
      title: 'Sorry!',
      message: 'Rewrite your requests, write something different.!',
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

    showElement(refs.logo, false);

    refs.gallery.insertAdjacentHTML('afterbegin', markupGallery(collection));

    iziToast.show({
      title: 'Hooray!',
      message: `We found ${allCollection} images.`,
      position: 'topRight',
    });

    showElement(refs.loadBtn, true);
    onImages.refresh();

  } catch (err) {

    console.log(err);
    clearPage();
    showElement(refs.logo, true);
  }
}

async function handleLoadMore(e) {
  e.preventDefault();

  page += 1;

  try {
    const data = await getImage(currentQuery, page);
    const collection = data.data.hits;
    const allCollection = data.data.totalHits;

    if (!(page < Math.ceil(allCollection / 40))) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      showElement(refs.loadBtn, false);
      return;
    }

    refs.gallery.insertAdjacentHTML('beforeend', markupGallery(collection));
    scrollPage();
    onImages.refresh();

  } catch (err) {

    console.log(err);
    clearPage();
    showElement(refs.logo, true);
  }
}

function clearPage() {
  refs.gallery.innerHTML = '';
  currentQuery = '';
  page = 1;
}

function scrollPage() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
