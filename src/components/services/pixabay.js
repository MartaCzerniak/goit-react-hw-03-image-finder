const KEY = "30320801-1456ed5809b26fff643ce9c83";

const fetchImages = (name, page) => {
  return fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${name}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

const imageAPI = {
  fetchImages,
};

export default imageAPI;
