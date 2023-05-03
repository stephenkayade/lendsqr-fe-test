import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="inner">
            <Link to=''>
                <img src="../../../images/assets/icons/logo.svg" height={30} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Topbar