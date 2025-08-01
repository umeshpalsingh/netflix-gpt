import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addAiringTodayTvSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const useAiringTodayTvSeries = () => {
    const dispatch = useDispatch();

    const airingTodayTvSeries = useSelector(state => state.movies.airingTodayTvSeries);

    const getAiringTodayTvSeries = async () => {
        const data = await fetch(
        'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
        API_OPTIONS
        );
        const json = await data.json();
        
        dispatch(addAiringTodayTvSeries(json.results))
    };

    useEffect(() => {!airingTodayTvSeries && getAiringTodayTvSeries()}), [];
}

export default useAiringTodayTvSeries;