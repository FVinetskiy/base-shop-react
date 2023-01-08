import Product from "./product";
import Skeleton from "./Skeleton";

const Products = (props) => {
  console.log(props , '2')
  return (
    <div className="products">
        <h1>Все пиццы</h1>
        <h2>Products massive</h2>
      <div className="products__list">
        {
          props.isloading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : props.arrProduct.map(item => <Product
            sizes={item.sizes} 
            imageurl={item.imageurl} 
            key={item.id} 
            text={item.name} 
            price={item.price}
            types={item.types}
            category={item.category}
            rating={item.rating} />)
        }
        </div>
    </div>
  );
}

export default Products;