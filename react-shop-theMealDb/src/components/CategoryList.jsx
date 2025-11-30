import { CategoryItem } from './CategoryItem';

export function CategoryList({ categories }) {
  return (
    <div className='grid gap-5 m-5 sm:grid-cols-2  md:grid-cols-4'>
      {
        categories.map(el => <CategoryItem key={el.idCategory} {...el} />)
      }
    </div>
  )
}
