import { useNavigate } from 'react-router-dom';

export function CategoryItem({
    idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
}) {
    const classes = 'shadow-xl p-4 rounded-xl hover:shadow-gray-500 flex items-center flex-col cursor-pointer';
    const navigate = useNavigate();

    return (
        <div className={classes} onClick={() => navigate(`/category/${strCategory}`)} >
            <img src={strCategoryThumb} alt={strCategory} />
            <h2>id: {idCategory}</h2>
            <h3>Category: {strCategory}</h3>
            <p>Description: {strCategoryDescription.length > 50 ? strCategoryDescription.slice(0, 50) + '...' : strCategoryDescription}</p>
        </div>
    )
}
