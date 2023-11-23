import axios from 'axios';

const KEY = '34554984-68074c5646cb7a45ce2c04cbc';
const URL = 'https://pixabay.com/api/';

export async function getImage(query, page) {
  try {
    const resp = await axios.get(`${URL}?key=${KEY}&q=${query}&page=${page}`, {
      params: {
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: '40',
      },
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
}
