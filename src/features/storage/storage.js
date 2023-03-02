const selected_movie_id_key = 'selected_movie_id_key'
const selected_movie_type_key = 'selected_movie_type_key'

export const saveSelectedMovieId = (id)=>{
    localStorage.setItem(selected_movie_id_key,id)
}

export const saveSelectedMovieType = (type)=>{
    localStorage.setItem(selected_movie_type_key,type)
}

export const getSelectedMovieIdFromStorage = ()=>{
    return localStorage.getItem(selected_movie_id_key)
}

export const getSelectedMovieTypeFromStorage = ()=>{
    return localStorage.getItem(selected_movie_type_key)
}
