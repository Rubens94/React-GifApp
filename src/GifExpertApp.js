import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

  /*  const handleAdd = () => {
       setCategories( ['Hunter X Hunter', ...categories] );
   } */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( categoria => (
                        <GifGrid 
                            category={categoria} 
                            key={categoria} // Todos los array.map deben de llevar su key en React   
                        />
                    ))
                }
            </ol>
        </>
    );
}
