import React, { useReducer } from 'react'
import UserReducer from './userReducer'
import UserContext from './userContext'
import Axios from 'axios'
import { GET_USER, GET_USERS, SET_LOADING } from './types'
import storage from '../components/helpers/storage'
// import Dexie from 'dexie'

// let db = new Dexie('Lendsqr test')
// db.version(1).stores({
//     users: 
// })

const UserState = (props: any) => {


    const initialState = {
        users: storage.getUsers(),
        user: storage.getUser()
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async () => {
        setLoading()

        try {

            await Axios.get(`${process.env.REACT_APP_BASE_URL}`)

                .then((resp) => {
                    console.log(resp)
                    storage.saveUsers('users', resp.data)
                    dispatch({
                        type: GET_USERS,
                        payload: resp.data
                    })
                }).catch((err) => {
                    console.log(err)
                })

        } catch (error) {
            console.log(error)
        }

    }

    const getUser = async (id:string) => {

        setLoading()

        try {

            await Axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`)

                .then((resp) => {
                    console.log(resp)
                    storage.saveUser('user', resp.data)
                    dispatch({
                        type: GET_USER,
                        payload: resp.data
                    })
                }).catch((err) => {
                    console.log(err)
                })

        } catch (error) {
            console.log(error)
        }

    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    return <UserContext.Provider
        value={{
            users: state.users,
            user: state.user,
            getUsers,
            getUser
        }}
    >
        {props.children}

    </UserContext.Provider>

}

export default UserState