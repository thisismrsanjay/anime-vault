import React,{createContext,useContext, useReducer} from "react";


const GlobalContext = React.createContext();

const baseUrl = "https://api.jikan.moe/v4";

//reducer
const reducer = (state, action) => {
    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case GET_POPULAR_ANIME:
            return {...state, popularAnime: action.payload, loading: false}
        case SEARCH:
            return {...state, searchResults: action.payload, loading: false}
        case GET_UPCOMING_ANIME:
            return {...state, upcomingAnime: action.payload, loading: false}
        case GET_AIRING_ANIME:
            return {...state, airingAnime: action.payload, loading: false}
        case GET_PICTURES:
            return {...state, pictures: action.payload, loading: false}
        default:
            return state;
    }
}

//actions 
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_PICTURES = "GET_PICTURES";

export const GlobalContextProvider = ({children}) => {

    const intialState = {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        isSearch: false,
        searchResults: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(reducer, intialState);
    const [search, setSearch] = React.useState('');

    const getPopularAnime = async () => {

        dispatch({type: LOADING});

        const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity&limit=10`);
        const data = await response.json();
        //console.log(data.data);
        dispatch({type: GET_POPULAR_ANIME, payload: data.data})
    
    }

    React.useEffect(() => {
        getPopularAnime();
    
    },[])

    return (
        <GlobalContext.Provider value={{...state}}>
            {children}
        </GlobalContext.Provider>
    )
    
}

export const useGlobalContext = () => {
    return React.useContext(GlobalContext)
}