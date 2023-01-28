import Search from "../Serch/Search";
import { Link } from "react-router-dom";
import './FilterHead.sass'

const FilterHead = () => {
  return (
    <div className="FilterHead">
      <Link className="FilterHead__link" to="/">logo</Link>
      <Search  />
    </div>
  );
}

export default FilterHead;
