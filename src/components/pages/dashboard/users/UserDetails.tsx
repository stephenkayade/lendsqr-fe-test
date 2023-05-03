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

  const formatCurrency = (lang: string, currency: string, value: number): string => {
    const l = lang.substring(0, 2)
    return new Intl.NumberFormat(`en-${l}`, { style: 'currency', currency: `${currency}` }).format(value)
  }

  const formatEmail = (firstName: string, lastName: string): string => {
    const result = firstName + lastName
    return result.toLowerCase() + '@gmail.com'
  }

  return (
    <>

      <div className="ui-content">

        <div className="separate">

          <Tabs defaultIndex={parseInt(storage.fetchLegacy('module-tab'))}>

            <div className="ui-dash-panel">

              <TabList className='tablist'>

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
                      <img src="../../../images/assets/icons/star.svg" alt="" style={{ margin: '0 .2rem' }} />
                      <img src="../../../images/assets/icons/star.svg" alt="" />
                    </span>
                  </div>

                  <div className="bank__info">
                    <h3 className="text-secondary fs-22 fw-500">{new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(userContext.user?.accountBalance)}</h3>
                    <p className="text-light fs-14">{`${userContext.user?.accountNumber}/providus bank`}</p>
                  </div>

                </div>

                <div className="tab-panel">

                  <Tab className={`tab fs-16 fw-400 ${step === 0 ? 'active' : ''}`} onClick={(e) => { configTab(e, 0); }}>General Details</Tab>
                  <Tab className={`tab fs-16 fw-400 ${step === 1 ? 'active' : ''}`} onClick={(e) => { configTab(e, 1); }}>Documents</Tab>
                  <Tab className={`tab fs-16 fw-400 ${step === 2 ? 'active' : ''}`} onClick={(e) => { configTab(e, 2); }}>Bank Details</Tab>
                  <Tab className={`tab fs-16 fw-400 ${step === 3 ? 'active' : ''}`} onClick={(e) => { configTab(e, 3); }}>Loans</Tab>
                  <Tab className={`tab fs-16 fw-400 ${step === 4 ? 'active' : ''}`} onClick={(e) => { configTab(e, 4); }}>Savings</Tab>
                  <Tab className={`tab fs-16 fw-400 ${step === 5 ? 'active' : ''}`} onClick={(e) => { configTab(e, 5); }}>App and System</Tab>

                </div>

              </TabList>

            </div>

            <TabPanel tabIndex={0}>

              <div className='ui-dash-panel'>

                <div className="personal__info">

                  <div>

                    <h3 className="fs-16 text-secondary fw-500">Personal Information</h3>

                    <div className="pinfo">

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">FULL NAME</h4>
                        <p className="text-light fw-500 fs-16">{`${userContext.user?.profile?.firstName + ' ' + userContext.user?.profile?.lastName}`}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">PHONE NUMBER</h4>
                        <p className="text-light fw-500 fs-16">{`${userContext.user?.phoneNumber}`}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">EMAIL ADDRESS</h4>
                        <p className="text-light fw-500 fs-16">{`${userContext.user?.email}`}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">BVN</h4>
                        <p className="text-light fw-500 fs-16">{`${userContext.user?.profile?.bvn}`}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">GENDER</h4>
                        <p className="text-light fw-500 fs-16">{`${userContext.user?.profile?.gender}`}</p>
                      </div>
                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">MARITL STATUS</h4>
                        <p className="text-light fw-500 fs-16">Single</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">CHILDREN</h4>
                        <p className="text-light fw-500 fs-16">None</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">TYPE OF RESIDENCE</h4>
                        <p className="text-light fw-500 fs-16">Parent's Apartment</p>
                      </div>
                    </div>

                  </div>

                  <div>

                    <h3 className="fs-16 text-secondary fw-500">Education and Employment</h3>

                    <div className="einfo">

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">LEVEL OF EDUCATION</h4>
                        <p className="text-light fw-500 fs-16">{userContext.user?.education?.level}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">EMPLOYMENT STATUS</h4>
                        <p className="text-light fw-500 fs-16">{userContext.user?.education?.employmentStatus}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">SECTOR OF EMPLOYMENT</h4>
                        <p className="text-light fw-500 fs-16">{userContext.user?.education?.sector}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">DURATION OF EMPLOYMENT</h4>
                        <p className="text-light fw-500 fs-16">{userContext.user?.profile?.bvn}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">OFFICE EMAIL</h4>
                        <p className="text-light fw-500 fs-16">{userContext.user?.education?.officeEmail}</p>
                      </div>
                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">MONTHLY INCOME</h4>
                        <p className="text-light fw-500 fs-16">
                          {
                            `${formatCurrency
                              (`${userContext.user?.profile?.currency}`,
                                userContext.user?.profile?.currency,
                                userContext.user?.education?.monthlyIncome[0]
                              )}
                              -
                              ${formatCurrency
                              (`${userContext.user?.profile?.currency}`,
                                userContext.user?.profile?.currency,
                                userContext.user?.education?.monthlyIncome[1]
                              )}
                              `
                          }
                        </p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">LOAN REPAYMENT</h4>
                        <p className="text-light fw-500 fs-16">
                          {
                            formatCurrency
                              (`${userContext.user?.profile?.currency}`,
                                userContext.user?.profile?.currency,
                                userContext.user?.education?.loanRepayment
                              )
                          }
                        </p>
                      </div>
                    </div>

                  </div>

                  <div>

                    <h3 className="fs-16 text-secondary fw-500">Socials</h3>

                    <div className="sinfo">

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">TWITTER</h4>
                        <p className="text-light fw-500 fs-16">{userContext.user?.socials?.twitter}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">FACEBOOK</h4>
                        <p className="text-light fw-500 fs-16">{userContext.user?.socials?.facebook}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">INSTAGRAM</h4>
                        <p className="text-light fw-500 fs-16">{userContext.user?.socials?.twitter}</p>
                      </div>

                    </div>

                  </div>

                  <div>

                    <h3 className="fs-16 text-secondary fw-500">Guarantor</h3>

                    <div className="ginfo">

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">FULL NAME</h4>
                        <p className="text-light fw-500 fs-16">{`${userContext.user?.guarantor?.firstName + ' ' + userContext.user?.guarantor?.lastName}`}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">PHONE NUMBER</h4>
                        <p className="text-light fw-500 fs-16">{userContext.user?.guarantor?.phoneNumber}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">EMAIL ADDRESS</h4>
                        <p className="text-light fw-500 fs-16">{formatEmail(userContext.user?.guarantor?.firstName, userContext.user?.guarantor?.lastName)}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">RELATIONSHIP</h4>
                        <p className="text-light fw-500 fs-16">Sister</p>
                      </div>

                    </div>

                  </div>

                  <div>

                    <div className="gdinfo">

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">FULL NAME</h4>
                        <p className="text-light fw-500 fs-16">{`${userContext.user?.guarantor?.firstName + ' ' + userContext.user?.guarantor?.lastName}`}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">PHONE NUMBER</h4>
                        <p className="text-light fw-500 fs-16">{userContext.user?.guarantor?.phoneNumber}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">EMAIL ADDRESS</h4>
                        <p className="text-light fw-500 fs-16">{formatEmail(userContext.user?.guarantor?.firstName, userContext.user?.guarantor?.lastName)}</p>
                      </div>

                      <div className="info__card">
                        <h4 className="text-light fs-12 fw-400">RELATIONSHIP</h4>
                        <p className="text-light fw-500 fs-16">Sister</p>
                      </div>

                    </div>

                  </div>



                </div>
              </div>

            </TabPanel>


          </Tabs>

        </div>
      </div>






    </>
  )
}

export default UserDetails