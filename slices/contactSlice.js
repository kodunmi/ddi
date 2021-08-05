import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../constant'

export const getContact = createAsyncThunk('fetchContact', async () => {
    const response = await axios.get(`${API_URL}/contact`)
    return response.data
})
const initialState = { 
    contact: {},
    status: 'loading',
    loading: true,
    error: null,
 }

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    extraReducers: {
        
        [getContact.fulfilled.toString()]: (state, action) => {
            state.status = 'succeeded'
            state.loading = false
            state.contact = {...action.payload}
        },
        [getContact.rejected.toString()]: (state, action) => {
            state.status = 'failed'
            state.loading = false
            state.error = action.error.message
        },
    }
})

export default contactSlice.reducer