import { ProductItem } from "./ProductItem";

export function ProductList({ products, addToBasket }) {
    return (
        <div className="ProductList">
            {
                products.map(product => (
                    <ProductItem key={product.id} product={product} addToBasket={addToBasket} />
                ))
            }
        </div>
    )
}