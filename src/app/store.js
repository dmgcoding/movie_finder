import { configureStore } from '@reduxjs/toolkit'
import movieSlicer from '../features/movies/movieSlicer'

export default configureStore({
  reducer: {
    movieSlice: movieSlicer
  },
})