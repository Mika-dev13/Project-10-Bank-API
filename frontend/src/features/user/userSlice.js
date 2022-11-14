import { createSlice } from '@reduxjs/toolkit'
import { getUserDetails, userLogin } from './userActions'

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userToken = null
      state.userInfo = {}
      state.success = false
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userToken = payload
      state.success = true
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.success = false
    },
    [getUserDetails.pending]: (state) => {
      state.loading = true
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo.firstName = payload.firstName
      state.userInfo.lastName = payload.lastName
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false
      // state.error = payload
    },
  },
})

const { actions } = userSlice

export const { logout } = actions

export default userSlice.reducer
