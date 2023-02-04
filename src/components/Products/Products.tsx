import Product from "../Product/product";
import Skeleton from "../Skeleton/Skeleton";

type ProductProps = {
  status: string,
  arrProduct : any
}

const Products:React.FC<ProductProps> = ({ status, arrProduct }) => {
    
  const productsmap = arrProduct.map((item:any) => <Product key={item.id} {...item} />) 
  const skeletons =  [...new Array(4)].map((_, index) => <Skeleton key={index} />)

    return (
      <div className="products">
        <h1>Все товары</h1>
        {
          status === 'error' ? <div>сервер не дал данные</div> : (
            <div className="products__list">{ status === 'loading' ? skeletons : productsmap }</div>
          )
        }

      </div>
    );
  }

export default Products;