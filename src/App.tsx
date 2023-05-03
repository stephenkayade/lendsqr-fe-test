import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashboardLayout from "./components/layouts/global/Dashboard"
import MainLoader from "./components/layouts/partials/MainLoader"
import UserState from "./context/userState"

const Login = React.lazy(() => import('./components/pages/auth/Login'))
const Users = React.lazy(() => import('./components/pages/dashboard/users/Users'))
const UserDetails = React.lazy(() => import('./components/pages/dashboard/users/UserDetails'))

const App = () => {

  return (

    <Router>
      <UserState>

        <Suspense fallback={MainLoader()}>

          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/dashboard/users" element={<DashboardLayout Component={Users} />} />
            <Route path="/dashboard/users/:id" element={<DashboardLayout Component={UserDetails} />} />
          </Routes>
        </Suspense>

      </UserState>
    </Router>

  )
}

export default App