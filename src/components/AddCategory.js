import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputvalue] = useState('');

    const handleInputChange = ( e ) => {
        setInputvalue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        //Primera validación, trim elimina los espacios vacíos
        if ( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats, ]);
            setInputvalue('');
        }
        
        //llamar a setCategories
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
