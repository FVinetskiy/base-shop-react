import React from 'react'
import svg from '../assets/img/404.svg'
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="NotFound">
      <h1>Страница не найдена</h1>
      <img src={svg} alt="" />
      <Link  to='/'>вернуться на главную</Link>
    </div>
  );
}

export default NotFound;
