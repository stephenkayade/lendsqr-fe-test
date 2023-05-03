import React, { useRef, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserCard from './UserCard'
import UserContext from '../../../../context/userContext'
import storage from '../../../helpers/storage'

const Users = () => {

  const users = [
    { id: '2erwfcd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'inactive' },
    { id: '2erwdcd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'active' },
    { id: '2erwrcd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'pending' },
    { id: '2erwtcd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'blacklisted' },
    { id: '2erwycd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'inactive' },
    { id: '2erwpcd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'active' },
    { id: '2erwocd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'pending' },
    { id: '2erqfcd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'blacklisted' },
    { id: '2ersfcd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'inactive' },
    { id: '2erafcd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'active' },
    { id: '2ervfcd', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'pending' },
    { id: '2ernfcw', org: 'Lendsqr', username: 'Adedeji', email: 'adedejilendsqr.com', phone: '09033445555', date: 'May 15, 2020 10:00 AM', status: 'blacklisted' },
  ]

  const filterRef = useRef<any>()
  const [expandedIndex, setExpandedIndex] = useState<number>(-1)
  const [rStatus, setRStatus] = useState<string>('')

  const userContext = useContext(UserContext)

  useEffect(() => {

    const handler = (event: any) => {

      if (!filterRef.current) {
        return
      }

      if (!filterRef.current.contains(event.target)) {
        setExpandedIndex(-1)
      }

    }

    document.addEventListener('click', handler, true)

    if (storage.checkData('users') === false) {
      userContext.getUsers()
    }

    return () => {
      document.removeEventListener('click', handler)
    }



  }, [])

  const onPop = (index: number) => {

    setExpandedIndex((currentIndex): number => {

      if (currentIndex === index) {

        return -1

      } else {

        return index

      }
    })

  }

  const formatStatus = () => {

    const status = ['active', 'inactive', 'blacklisted', 'pending']
    const result = status[(Math.floor(Math.random() * status.length))]
    setRStatus(result)

    let flag: string = ''

    if (rStatus === 'active') {

      return flag = 'green'

    } if (rStatus === 'inactive') {

      return flag = 'gray'

    } if (rStatus === 'pending') {

      return flag = 'yellow'

    } if (rStatus === 'blacklisted') {

      return flag = 'red'

    }

    return flag

  }


  // const randomStatus = () => {
  //   const status = ['active', 'inactive', 'blacklisted', 'pending']
  //   const result = status[(Math.floor(Math.random() * status.length))]
  //   setRStatus(result)
  //   return result
  // }

  const renderedItems = userContext.users.length > 0 &&
    userContext.users.map((user: any, index: number) => {

      const isExpanded = index === expandedIndex

      return (

        <tr key={user.id}>
          <td className='fs-14'> <span>{user.orgName}</span> </td>
          <td className='fs-14'><span>{user.userName}</span> </td>
          <td className='fs-14'><span>{user.email}</span> </td>
          <td className='fs-14'><span>{user.phoneNumber}</span> </td>
          <td className='fs-14'><span>{user.createdAt}</span> </td>
          <td className={`fs-14 `}> <span className={`status ${formatStatus}`}>{rStatus}</span></td>
          <td ref={filterRef} className='fs-14 ui-relative'>
            <img onClick={() => onPop(index)} src="../../../images/assets/icons/more.svg" alt="" />

            {
              (isExpanded) &&

              <div className="menupop ui-absolute">
                <Link to={`/dashboard/users/${user.id}`}>
                  <img src="../../../images/assets/icons/user-details.svg" alt="" style={{position: 'relative', top: '1.5px'}} />
                  <span className='fs-14'>View Details</span>
                </Link>
                <Link to=''>
                  <img src="../../../images/assets/icons/delete-user.svg" alt="" style={{position: 'relative', top: '1.5px'}} />
                  <span className='fs-14'>Blacklist User</span>
                </Link>
                <Link to=''>
                  <img src="../../../images/assets/icons/activate-user.svg" alt="" style={{position: 'relative', top: '1.5px'}} />
                  <span className='fs-14'>Activate User</span>
                </Link>
              </div>

            }

          </td>
        </tr>
      )
    })

  return (
    <>
      <h1 className="fs-24 text-secondary fw-500">Users</h1>

      <div className="ui-card">

        <UserCard />

        <div className="ui-dashboard-table">
          <table className=' rounded-sm'>
            <thead>
              <tr>
                <th align='left'>
                  <span>organization</span>
                  <img src="../../../images/assets/icons/filter.svg" alt="org" />
                </th>
                <th align='left'>
                  <span>Username</span>
                  <img src="../../../images/assets/icons/filter.svg" alt="org" />
                </th>
                <th align='left'>
                  <span>Email</span>
                  <img src="../../../images/assets/icons/filter.svg" alt="org" />
                </th>
                <th align='left'>
                  <span>Phone number</span>
                  <img src="../../../images/assets/icons/filter.svg" alt="org" />
                </th>
                <th align='left'>
                  <span>Date joined</span>
                  <img src="../../../images/assets/icons/filter.svg" alt="org" />
                </th>
                <th align='left'>
                  <span>Status</span>
                  <img src="../../../images/assets/icons/filter.svg" alt="org" />
                </th>
                <th align='left'>
                  <span></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {renderedItems}
              <tr>
              </tr>
            </tbody>
          </table>

          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <p>showing</p>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Users