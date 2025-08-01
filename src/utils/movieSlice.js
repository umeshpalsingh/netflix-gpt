import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies", 
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        popularTvSeries: null,
        airingTodayTvSeries: null,
        topRatedTvSeries: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addPopularTvSeries: (state, action) => {
            state.popularTvSeries = action.payload;
        },
        addAiringTodayTvSeries: (state, action) => {
            state.airingTodayTvSeries = action.payload
        },
        addTopRatedTvSeries: (state, action) => {
            state.topRatedTvSeries = action.payload;
        }
    }
})

export const {addNowPlayingMovies, 
    addTrailerVideo, 
    addPopularMovies, 
    addTopRatedMovies, 
    addUpcomingMovies, 
    addPopularTvSeries, 
    addAiringTodayTvSeries,
    addTopRatedTvSeries} = movieSlice.actions

export default movieSlice.reducer;