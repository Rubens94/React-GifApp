import React, {useState} from 'react'
import PropTypes from 'prop-types';

// rafc
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); // Poner como string vacío el useState para evitar un error

    const handleInputChange = (e) => {
        
        setInputValue( e.target.value); // Permitir escribir en la caja de texto 
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar evento inecesario del form

        if( inputValue.trim().length > 2){

            setCategories( cats => [inputValue,...cats]);
            setInputValue('');
        }

        //console.log('Submit hecho');

    }

    return (
        <>
        <form onSubmit={ handleSubmit}>
            <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
            >
            </input>
        </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}