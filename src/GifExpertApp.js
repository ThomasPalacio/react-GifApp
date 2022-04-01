import React, {useState} from 'react'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {


const [categories, setCategories] = useState(['Friends']);

/* const handleAdd = () =>{
setCategories([...categories, 'Naruto']);
console.log(categories);
} */

  return (
    <>
        <h2 className='titleHome  animate__animated animate__swing'>Busca tus GIFS</h2>
        <CategoryAdd setCategories={setCategories}/>
        <ol>
        {
          categories.map ( (category ) => <GifGrid key={category} category={category} />)
        }
        </ol>
    </>
  )
}

export default GifExpertApp