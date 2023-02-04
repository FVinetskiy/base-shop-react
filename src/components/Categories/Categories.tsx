import React from 'react'

type CategoriesProps = {
  categoryIndex: number,
  onClickCategory: (i:number) => void
}

const valueFilter = ['все', 'лучшие', 'эксклюзив']

const Categories: React.FC<CategoriesProps> = ({categoryIndex , onClickCategory}) => {
  return (
    <div>
      <ul>
        {valueFilter.map((item, i) => (
          <li
            className={categoryIndex === i ? 'active' : ''}
            key={item}
            onClick={() => onClickCategory(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

