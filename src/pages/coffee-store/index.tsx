import React from 'react'

const CoffeeStorePage = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'fsq303gD3PyTKOsjn6yqW0VzNltQ9KjbcCZX/U433g5Lzc4='
        }
    };

    const response = await fetch('https://api.foursquare.com/v3/places/search?query=coffee&ll=52.640889%2C1.1216884&limit=20', options)
    const data = await response.json()
    console.log(data.results)

    // .catch(err => console.error(err));
    return (
        <div>
            data.results
        </div>
    )
}

export default CoffeeStorePage
