import React from 'react'

const Categories = (props) => {
    const valueFilter = ['все', 'лучшие', 'эксклюзив']
  return (
    <div>
      <ul>
        {valueFilter.map((item, i) => (
          <li
            className={props.categoryIndex === i ? 'active' : ''}
            key={item}
            onClick={() => props.onClickCategory(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
