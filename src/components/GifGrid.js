import React from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';


const GifGrid = ({category}) => {

    const {data:imgs, loading} = useFetchGifs(category);

    



  return (
      <>
        <h3 className='categoryName animate__animated animate__fadeInLeft'>{ category }</h3>

        {loading && <p className='loading animate__animated animate__flash'>Loading...</p>  }

         <div className='card-grid'>
            {
                imgs.map(img =>(
                    <GifGridItem key={img.id} {...img}/>

                    )
            )
            }
        </div> 
    </>
  )
}

export default GifGrid