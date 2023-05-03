import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="inner">
        <Link to='' className='logo'>
          <img src="../../../images/assets/icons/logo.svg" height={30} alt="" />
        </Link>
        <div className='search'>

          <form action="">
            <input type="text" />
            <div className='search__icon'>
              <AiOutlineSearch />
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Topbar