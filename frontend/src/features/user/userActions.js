import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../../services/api'

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }
      const { data } = await instance.post(
        '/user/login',
        { email, password },
        config
      )

      const token = data.body.token

      return token
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { user } = getState()
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      }
      const { data } = await instance.post('/user/profile', {}, config)
      return data.body
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const updateUserName = createAsyncThunk(
  'user/updateUserName',
  async ({ firstName, lastName }, { getState, rejectWithValue }) => {
    try {
      const { user } = getState()
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      }
      const { data } = await instance.put(
        '/user/profile',
        { firstName, lastName },
        config
      )

      return data.body
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
