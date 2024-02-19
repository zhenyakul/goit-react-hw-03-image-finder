import axios from 'axios';

export const getDataFromPixabay = async input => {
  try {
    const res = await axios.get(
      `https://pixabay.com/api/?q=${input}&page=1&key=38607129-9108439e3ea986f49405f283d&image_type=photo&orientation=horizontal&per_page=12`
    );
    return res.data.hits;
  } catch (err) {
    console.log(err);
    return [];
  }
};
