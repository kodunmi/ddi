import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../constant'

export const getAbout = createAsyncThunk('fetchAbout', async () => {
    const response = await axios.get(`${API_URL}/about`)
    return response.data
})
const initialState = { 
    about: {},
    status: 'idle',
    loading:true,
    error: null,
 }

const aboutSlice = createSlice({
    name: 'about',
    initialState,
    extraReducers: {
        
        [getAbout.fulfilled.toString()]: (state, action) => {
            state.status = 'succeeded'
            state.loading = false
            state.about = {...action.payload}
        },
        [getAbout.rejected.toString()]: (state, action) => {
            state.status = 'failed'
            state.loading = false
            state.error = action.error.message
        },
    }
})

// export const { increment, decrement, incrementByAmount } = aboutSlice.actions
export default aboutSlice.reducer