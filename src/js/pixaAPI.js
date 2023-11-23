import axios from 'axios';

const KEY = '34554984-68074c5646cb7a45ce2c04cbc';
const URL = 'https://pixabay.com/api/';

export async function getImage(photo) {
  try {
    const resp = await axios.get(`${URL}?key=${KEY}&q=${photo}`, {
      params: {
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    });

    console.log('resp', resp)
    return resp;
    
  } catch (error) {
    console.log(error);
  }
}




// export async function getImage(foto) {
//   await axios
//     .get(`${URL}?key=${KEY}&q=cat`, {
//       params: {
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//       },
//     })
//     .then(resp => resp.json())
//     .catch(error => console.log(error));
// }