import React from 'react'

const Pagination = ({ totalPosts, postPerPage, paginate, activePage, pgNum }: any) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                <li>
                    <a className='fs-16 text-light active prev' href="">
                        <img src="../../../images/assets/icons/prev.svg" alt="" />
                    </a>
                </li>
                {pageNumbers.slice(0, 3).map((number, index) => (
                    <li key={number}>
                        <a className={`fs-16 text-light${activePage !== index ? 'active' : ''}`} onClick={(e) => paginate(e, number)} href="">{number}</a>
                    </li>
                ))}
                {pageNumbers.slice(0, 3).map((number, index) => (
                    <li key={number}>
                        <a className={`fs-16 text-light${activePage !== index ? 'active' : ''}`} href="">.</a>
                    </li>
                ))}
                {pageNumbers.slice(-4, -1).map((number, index) => (
                    <li key={number}>
                        <a className={`fs-16 text-light${activePage !== index ? 'active' : ''}`} onClick={(e) => paginate(e, number)} href="">{number}</a>
                    </li>
                ))}
                <li>
                    <a className='fs-16 text-light active next' href="">
                        <img src="../../../images/assets/icons/switch-org.svg" alt="" />

                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination