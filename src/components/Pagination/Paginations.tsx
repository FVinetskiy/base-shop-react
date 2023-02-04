import React from 'react'
import ReactPaginate from 'react-paginate';
import './paginations.sass'

type NotFoundProps = {
  onChangePage: (page: number) => void
}

const Paginations: React.FC<NotFoundProps> = ({ onChangePage}) => {
  return (
    <div>
      <ReactPaginate
        className='paginations'
        breakLabel="..."
        nextLabel="next"
        onPageChange={event => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="prev"
      />
    </div>
  )
}

export default Paginations

