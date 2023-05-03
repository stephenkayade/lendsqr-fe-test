import React, { useState, useEffect } from 'react'

import SideBar from '../partials/Sidebar'
import TopBar from '../partials/Topbar'
import { IDLayoutProps } from '../../helpers/types'

const DashboardLayout = ({ Component }: Partial<IDLayoutProps>) => {

    return (
        <>
            <div className="ui-dashboard">
                <TopBar />


                <main className='ui-dashboard-body'>

                    <SideBar />

                    <div className="ui-dashboard-content">
                        <div className="ui-content">
                            <Component />

                        </div>
                    </div>


                </main>
            </div>
        </>
    )

}

export default DashboardLayout