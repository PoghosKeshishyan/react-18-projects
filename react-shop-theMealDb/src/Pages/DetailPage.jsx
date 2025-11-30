import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMealById } from '../api';

export function DetailPage() {
    const [meal, setMeal] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getMealById(id).then(data => {
            console.log(data.meals[0]);
            setMeal(data.meals[0]);
        });
    }, [])

    return (
        <div className='mt-20 text-2xl shadow-xl p-4 rounded-xl  flex items-center justify-center'>
            <img src={meal.strMealThumb} alt={meal.idMeal} className=' w-80 h-80 mr-5' />

            <div>
                <h3>ID: {meal.idMeal}</h3>
                <h4>Area: {meal.strArea}</h4>
                <h4>Category: {meal.strCategory}</h4>
                <a href={meal.strYoutube} className=' underline hover:text-orange-300'>Link to Youtube</a>
                <button onClick={() => navigate(-1)} className=' bg-gray-500 text-orange-400 p-3 rounded-lg block'>GO BACK</button>
            </div>
        </div>
    )
}
