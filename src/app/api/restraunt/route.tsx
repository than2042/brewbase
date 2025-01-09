const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'fsq303gD3PyTKOsjn6yqW0VzNltQ9KjbcCZX/U433g5Lzc4='
    }
};

fetch('https://api.foursquare.com/v3/places/search?query=restraunt&ll=52.640889%2C1.1216884', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));