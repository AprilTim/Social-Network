import React from "react";
import './Pagination.css'

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.countPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let viewField = 4;
    let viewPages = pages.filter((n) => n < props.currentPage + viewField && n >= props.currentPage - viewField || n == pagesCount || n == 1)

    return (
        <div className="pagination">
            <button disabled={props.currentPage == 1}
                    className='pagination_btn'
                    onClick={() => props.onChangeCurrentPage(props.currentPage - 1)}>&#5176;</button>
            <div className="pagination_pages">
                {viewPages.map(el => (
                    <div onClick={() => {
                        props.onChangeCurrentPage(el)
                    }} className={`pagination_item ${props.currentPage === el && "selectedPage"}`}>{el}</div>))}
            </div>
            <button disabled={props.currentPage == pagesCount}
                    className='pagination_btn'
                    onClick={() => props.onChangeCurrentPage(props.currentPage + 1)}>&#5171;</button>
        </div>
    )
}

export default Pagination;