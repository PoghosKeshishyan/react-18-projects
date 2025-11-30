import ProductItem from './ProductItem';

export default function ProductList({ filteredProducts }) {
    return (
        <div className="ProductList">
            {
                filteredProducts.map(item => <ProductItem key={item.id} item={item} />)
            }
        </div>
    )
}
