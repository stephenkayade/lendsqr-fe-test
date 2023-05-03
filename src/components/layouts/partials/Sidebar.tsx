import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import storage from '../../helpers/storage'
import UserContext from '../../../context/userContext'

const Sidebar = () => {

    const customerRoutes = [
        { id: '2erwfcd', title: 'Users', imgUrl: '../../../images/assets/icons/users.svg', route: '/dashboard/users' },
        { id: '2erwfce', title: 'Guarantors', imgUrl: '../../../images/assets/icons/guarantors.svg', route: '' },
        { id: '2erwfcf', title: 'Loans', imgUrl: '../../../images/assets/icons/loan.svg', route: '' },
        { id: '2erwfcg', title: 'Decision Models', imgUrl: '../../../images/assets/icons/decision.svg', route: '' },
        { id: '2erwfch', title: 'Savings', imgUrl: '../../../images/assets/icons/save.svg', route: '' },
        { id: '2erwfci', title: 'Loan Requests', imgUrl: '../../../images/assets/icons/loan-request.svg', route: '' },
        { id: '2erwfck', title: 'Whitelist', imgUrl: '../../../images/assets/icons/whitelist.svg', route: '' },
        { id: '2erwfcl', title: 'Karma', imgUrl: '../../../images/assets/icons/karma.svg', route: '' },
    ]

    const [active, setActive] = useState<boolean>(false)

    // const userContext = useContext(UserContext)

    // useEffect(() => {
    //     if (storage.checkData('users') === false) {
    //         userContext.getUsers()
    //       }
    // }, [])


    return (
        <div className='sidebar'>
            <div className="content">
                <div className="sdr__stack">

                    <Link to='' className='d-flex sdr__org'>
                        <img src='../../../images/assets/icons/organization.svg' alt='dashboard' className='mr-2'></img>
                        <span className='fs-16 text-secondary fw-400 mr-2'>Switch Organization</span>
                        <img src="../../../images/assets/icons/switch-org.svg" alt="" />
                    </Link>

                    <Link to='' className='sdr__dash d-flex'>
                        <img src='../../../images/assets/icons/home.svg' alt='dashboard' className='mr-2'></img>
                        <span className=' text-secondary-light'>Dashboard</span>

                    </Link>
                    <h3 className='fs-12 text-light fw-500'>CUSTOMERS</h3>
                </div>
                <div className="sdr__link__route">

                    {
                        customerRoutes.map((route, index) => (


                            <Link key={route.id} onClick={() => setActive(true)} to={`${route.route}`} className=" d-flex sdr__links">
                                <img src={route.imgUrl} alt={route.title} className='mr-2'></img>
                                <span>{route.title}</span>
                            </Link>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Sidebar