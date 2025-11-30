import { useContext } from "react";
import { ProductContext } from "../contexts/ProuductContext";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";

export default function HomePage() {
  const { products, loading } = useContext(ProductContext);

  const filteredProducts = products.filter(item => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div className="HomePage">
      {loading && <Loading />}
      {!loading && <ProductList filteredProducts={filteredProducts} />}
    </div>
  )
}
