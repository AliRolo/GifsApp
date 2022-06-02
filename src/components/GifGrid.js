import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    useEffect( () => {
        getGifs();
    }, [] )
    

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=MIl7qFg7caXF14nG3ot4EFQzSjOQQIbI';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
           return  {
               id: img.id,
               title: img.title, 
               url: img.images?.downsized_medium.url
           }
        })


        console.log(data);
        setImages( gifs);
    }

    return (
        <div>
            <h3> {category} </h3>
                {
                    images.map( img => (
                        <GifGridItem 
                        key= { img.id }
                        { ...img }
                        />
                    ))
                }
        </div>
    )
}
