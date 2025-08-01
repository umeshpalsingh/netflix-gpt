import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTvSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularTvSeries = () => {
    const dispatch = useDispatch();

    const popularTvSeries = useSelector(state => state.movies.popularTvSeries)

    const getPopularTvSeries = async () => {
        const data = await fetch(
        'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
        API_OPTIONS
        );
        const json = await data.json();
        
        dispatch(addPopularTvSeries(json.results))
    };

    useEffect(() => {!popularTvSeries && getPopularTvSeries()}), [];
}

export default usePopularTvSeries;