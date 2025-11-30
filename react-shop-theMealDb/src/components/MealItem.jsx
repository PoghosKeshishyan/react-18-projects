import { Link } from 'react-router-dom'

export function MealItem({ strMeal, strMealThumb, idMeal }) {

  const classes = 'shadow-xl p-4 rounded-xl hover:shadow-gray-500 flex items-center flex-col cursor-pointer'

  return (
    <div className={classes}>
      <img src={strMealThumb} alt={strMeal} />
      <h3>Id: {idMeal}</h3>
      <h3 className=' mb-3'>Name: {strMeal}</h3>
      <Link to={'/recipe/' + idMeal} className=' bottom-0 underline hover:text-orange-300'>Detail...</Link>
    </div>
  )
}
