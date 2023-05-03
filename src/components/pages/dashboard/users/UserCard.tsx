import React from 'react'

const UserCard = () => {

    const cards = [

        { title: 'USERS', imgUrl: '../../../images/assets/icons/usercard-user.svg', count: 2453, theme: 'pink' },
        { title: 'ACTIVE USERS', imgUrl: '../../../images/assets/icons/usercard-active.svg', count: 2453, theme: 'purple' },
        { title: 'USERS WITH LOANS', imgUrl: '../../../images/assets/icons/usercard-loans.svg', count: 12453, theme: 'orange' },
        { title: 'USERS WITH SAVINGS', imgUrl: '../../../images/assets/icons/usercard-savings.svg', count: 102453, theme: 'red' },
    ]

    const formatNumber = (number: number): string => {
        return new Intl.NumberFormat().format(number)
    }

    return (
        <>
            <div className="ui-dash-usercard">

                {
                    cards.map((card, index) => (


                        <div key={index} className="inner rounded-sm">

                            <div className={`user-icon bg-light-${card.theme}`}>
                                <img src={card.imgUrl} alt="" />
                            </div>

                            <p className='fs-14 text-light user fw-500'>{card.title}</p>

                            <p className='fs-24 fw-600 text-secondary'>{formatNumber(card.count)}</p>

                        </div>


                    ))
                }

            </div>
        </>
    )
}

export default UserCard
