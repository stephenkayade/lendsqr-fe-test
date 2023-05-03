import React from 'react'
import { GET_USER, GET_USERS, SET_LOADING } from './types'

const reducer = (state: any, action: any) => {

    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        case GET_USER:
            return {
                ...state,
                user: action.user,
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }

}

export default reducer