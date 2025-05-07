import React from 'react'
import ReactPaginate from 'react-paginate'

export default function Pagination({ page, size, elements, handlePageClick }) {
    return (
        <div style={{ paddingTop: "4px", display: "flex", justifyContent: "center" }}>
            <ReactPaginate
                previousLabel="<<"
                nextLabel=">>"
                pageCount={elements / size}
                breakLabel="..."
                className="paginate"
                activeClassName="active"
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                forcePage={page}
                onPageActive={1}
            />
        </div>
    )
}
