import { configureStore } from '@reduxjs/toolkit'
import abouteSlice from './slices/abouteSlice'
import contactSlice from './slices/contactSlice'
import blogSlice from './slices/blogSlice'

export default configureStore({
  reducer: {
    about: abouteSlice,
    contact: contactSlice,
    post: blogSlice
  },
})