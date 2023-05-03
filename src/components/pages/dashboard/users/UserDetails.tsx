import React, { useContext, useEffect, useState } from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import { useParams, Link } from 'react-router-dom'
import UserContext from '../../../../context/userContext'
import storage from '../../../helpers/storage'


const UserDetails = () => {

  const userContext = useContext(UserContext)

  const [step, setStep] = useState<number>(0)

  const { id } = useParams()

  useEffect(() => {
    if (storage.checkData('user') === false) {
      userContext.getUser(id)
    }
  }, [])

  const configTab = (e: any, val: any) => {

    if (e) { e.preventDefault(); }

    setStep(val)

    storage.keepLegacy('module-tab', val.toString())
  }

  return (
    <>

      <div className="ui-dash-panel">


        <Tabs defaultIndex={parseInt(storage.fetchLegacy('module-tab'))}>


          <TabList className="tab-panel">

            <div className="userdetails">

              <div className="img__card">
                <img src="../../../images/assets/icons/userdetails-img.svg" alt="" />
              </div>

              <div className="account__details">
                <h3 className="text-secondary fs-22 fw-500">{userContext.user?.profile?.firstName + ' ' + userContext.user?.profile?.lastName}</h3>
                <p className="text-light fs-14">{userContext.user?.accountNumber}</p>
              </div>

              <div className="tier">
                <h3 className="text-light fs-14 fw-500">User's Tier</h3>
                <span>
                  <img src="../../../images/assets/icons/active-star.svg" alt="" />
                  <img src="../../../images/assets/icons/star.svg" alt="" />
                  <img src="../../../images/assets/icons/star.svg" alt="" />
                </span>
              </div>

              <div className="bank__info">
                <h3 className="text-secondary fs-22 fw-500">{new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(userContext.user?.accountBalance)}</h3>
                <p className="text-light fs-14">{`${userContext.user?.accountNumber}/providus bank`}</p>
              </div>

            </div>
            
            <Tab className={`tab fs-16 fw-400 ${step === 0 ? 'active' : ''}`} onClick={(e) => { configTab(e, 0); }}>General Details</Tab>
            <Tab className={`tab fs-16 fw-400 ${step === 1 ? 'active' : ''}`} onClick={(e) => { configTab(e, 1); }}>Documents</Tab>
            <Tab className={`tab fs-16 fw-400 ${step === 2 ? 'active' : ''}`} onClick={(e) => { configTab(e, 2); }}>Bank Details</Tab>
            <Tab className={`tab fs-16 fw-400 ${step === 3 ? 'active' : ''}`} onClick={(e) => { configTab(e, 3); }}>Loans</Tab>
            <Tab className={`tab fs-16 fw-400 ${step === 4 ? 'active' : ''}`} onClick={(e) => { configTab(e, 4); }}>Savings</Tab>
            <Tab className={`tab fs-16 fw-400 ${step === 5 ? 'active' : ''}`} onClick={(e) => { configTab(e, 5); }}>App and System</Tab>
          </TabList>

          <TabPanel className='ui-dash-panel' tabIndex={0}>
            <div className="personal__info">
              <p className="fs-16 text-secondary fw-500">Personal Information</p>

              <div className="info__card">

              </div>

            </div>
          </TabPanel>
        </Tabs>

      </div>

    </>
  )
}

export default UserDetails