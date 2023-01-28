import Product from "./product";
import Skeleton from "./Skeleton";

const Products = ({isloading , arrProduct }) => {
  const products = arrProduct.map(item => <Product key={item.id} {...item} />)
  const skeletons =  [...new Array(4)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="products">
        <h1>Все товары</h1>
        <div className="products__list">
          { isloading ? skeletons : products }
        </div>
    </div>
  );
}

export default Products;