import Search from "../Serch/Search";
import { Link } from "react-router-dom";
import './FilterHead.sass'
import { useLocation } from 'react-router-dom';

const FilterHead: React.FC = () => {
  let { pathname } = useLocation();

  return (
    <div className="FilterHead">
      
      <Link className="FilterHead__link" to="/">logo</Link>
      {
        pathname !== '/Card' ? <Search /> : ''
      }
      
    </div>
  );
}

export default FilterHead;
