import React from 'react'
import ReactPaginate from 'react-paginate';
import './paginations.sass'

const Paginations = ({onChangePage}) => {
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
        renderOnZeroPageCount={null}
        
      />
    </div>
  )
}

export default Paginations

