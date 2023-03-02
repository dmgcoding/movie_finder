import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { saveSelectedMovieId, saveSelectedMovieType,getSelectedMovieIdFromStorage,getSelectedMovieTypeFromStorage } from '../storage/storage'

const items = [
    {
        value: 'movie',
        desc: 'Movie'
    },
    {
        value: 'tv',
        desc: 'TV Shows'
    }
  ]

const intialstate = {
    query: '',
    media_type: items[0].value,
    movie_results: [],
    selected_movie_id: getSelectedMovieIdFromStorage() === null ? 299536 : getSelectedMovieIdFromStorage(), //id 
    status: 'idle',
    selected_movie_type: getSelectedMovieTypeFromStorage() === null ? 'movie' : getSelectedMovieTypeFromStorage()
  }

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: intialstate,
  reducers: {
    setQuery: (state, action) => {
        console.log(state.movie_results)
        state.query = action.payload
        if(state.query === '')state.movie_results = []
    },
    setSelectedMovie: (state, action)=>{
        state.selected_movie_id = action.payload.id //id of the movie selected
        saveSelectedMovieId(action.payload.id)//save in local storage
        state.selected_movie_type = action.payload.type
        saveSelectedMovieType(action.payload.type)//save in local storage
        state.query = ''
        state.movie_results = []
    },
    setMediaType: (state,action)=>{
        if(action.payload.value === 'movie'){
            state.media_type = items[0].value
        }else if(action.payload.value === 'tv'){
            state.media_type = items[1].value
        }
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchMovies.pending,(state,action)=>{
        state.status = 'loading'
    }).
    addCase(fetchMovies.fulfilled, (state,action)=>{
        state.status = 'success'
        const movies = action.payload.results
        state.movie_results = movies
    }).
    addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
    })
  }
})

export const fetchMovies = createAsyncThunk('movies/fetchMovies',async(payload)=>{
    const media_type = payload.media_type
    const query = payload.query
    const api_key = process.env.REACT_APP_TMDB_APIKEY
    let url = 'https://api.themoviedb.org/3/search/movie?api_key='+api_key+'&language=en-US&page=1&include_adult=false&query='+query
    if(media_type === 'tv'){
        url = 'https://api.themoviedb.org/3/search/tv?api_key='+api_key+'&language=en-US&page=1&include_adult=false&query='+query
    }
    const res = await axios.get(url)
    return res.data
})

// Action creators are generated for each case reducer function
export const { setQuery, setSelectedMovie, setMovieResults,setMediaType } = movieSlice.actions

export default movieSlice.reducer