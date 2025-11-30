import React, { useState } from 'react'

const FilterPost = ({setSearchParams}) => {

    const [value, setValue] = useState('');

    const submitHandler= (e) => {
        e.preventDefault();

        const params = {};
        if(value) params.post = value
        setSearchParams(params);
    }

  return (
    <form onSubmit={submitHandler}>
        
        <input type={'text'} value={value} onChange={e=>setValue(e.target.value)} />
        <input type={'submit'} value='submit' />

    </form>
  )
}

export default FilterPost