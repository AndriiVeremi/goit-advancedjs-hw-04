import axios from 'axios';

const URL = 'https://pixabay.com/api/';

export async function getImage(query, page) {
  try {
    const resp = await axios.get(URL, {
      params: {
        key: '34554984-68074c5646cb7a45ce2c04cbc',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: '40',
        page: page,
      },
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
}
