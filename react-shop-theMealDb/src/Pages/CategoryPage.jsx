import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';

export function CategoryPage() {
    const navigate = useNavigate();
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then(data => {
            setMeals(data.meals);
        });
    }, [])

    return (
        <div className=' text-center'>
            <div className='p-9'></div>
            <p className='p-4 m-2 text-xl bg-gray-300 text-orange-400 font-medium '>Category: {name}</p>
            <button onClick={() => navigate(-1)} className=' bg-gray-500 text-orange-400 p-3 rounded-lg'>GO BACK</button>
            <MealList meals={meals} />
        </div>
    )
}

