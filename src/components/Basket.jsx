import { Link } from "react-router-dom";

const Basket = () => {
  return (
    <div className="">
      <button>очистить корзину</button>

      <div className="item">
        <div>
          <button>-</button>2<button>+</button>
        </div>
        <div>price 0</div>
        <button>delete</button>
      </div>

      <div className="basket__footer">
        <div className="basket__footer-content">
          <p>всего заказов</p>
          <p>сумма заказа 900 р </p>
        </div>
        <div className="basket__footer-content">
          <Link to='/'>назад</Link>
          <button>оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
