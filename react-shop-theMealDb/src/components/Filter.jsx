import { useState } from 'react';

export function Filter({ filterFunc }) {
  const [searchBy, setSearchBy] = useState('strCategory');

  const searchHendler = (event) => {
    filterFunc(event.target.value, searchBy);
  }

  const classes = 'bg-gray-300 text-orange-400 p-2 w-48 rounded-lg mx-2';
  const clasesActive = 'active bg-gray-300 text-orange-400 p-2 w-48 rounded-lg mx-2';
  const clasesInput = 'border-b-2 border-b-orange-400 w-72 outline-none';

  return (
    <div className=' text-center m-4'>
      <input type='text' placeholder='Search here...' className={clasesInput} onChange={searchHendler} />
      <button className={searchBy == 'strCategory' ? clasesActive : classes} onClick={() => setSearchBy('strCategory')}>Search By Category</button>
      <button className={searchBy == 'strCategoryDescription' ? clasesActive : classes} onClick={() => setSearchBy('strCategoryDescription')}>Search by Description</button>
    </div>
  )
}
