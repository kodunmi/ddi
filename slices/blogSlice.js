import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../constant'

export const getPosts = createAsyncThunk('fetchPosts', async () => {
    const response = await axios.get(`${API_URL}/posts`)
    return response.data
})

export const loadMorePosts = createAsyncThunk('fetchMorePosts', async (url) => {
    const response = await axios.get(url)
    return response.data
})


const initialState = { 
    postData: {},
    status: 'idle',
    loadingBlog:true,
    loadingMore:true,
    error: null,
 }

const PostSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: {
        
        [getPosts.fulfilled.toString()]: (state, action) => {
            state.status = 'succeeded'
            state.loadingBlog = false

            // console.log(action.payload.data);
            console.log(state.postData.data);
            state.postData = {...action.payload}
        },
        [getPosts.rejected.toString()]: (state, action) => {
            state.status = 'failed'
            state.loadingBlog = false
            state.error = action.error.message
        },
        [loadMorePosts.fulfilled.toString()]: (state, action) => {
            state.status = 'succeeded'
            state.loadingMore = false

            console.log({
                ...action.payload,
                data: [...state.postData.data,...action.payload.data]
            });
            state.postData = {
                ...action.payload,
                data: [...state.postData.data,...action.payload.data]
            }
            // state.postData.data.push(...action.payload.data)
        },
        [loadMorePosts.rejected.toString()]: (state, action) => {
            state.status = 'failed'
            state.loadingMore = false
            state.error = action.error.message
        },

    }
})

// export const { increment, decrement, incrementByAmount } = PostSlice.actions
export default PostSlice.reducer