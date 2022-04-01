import React from 'react'

const getGifs = async(category) => {

    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=HCyQoD2NfCH8P5Yh8iS50SiNNTDZ4V5W`
    const resp = await fetch(URL);

    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    })
    
    return gifs;

}

export default getGifs;