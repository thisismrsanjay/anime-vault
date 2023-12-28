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

    

    const handleChange = (e)=>{
        setSearch(e.target.value)
        if(e.target.value===""){
            state.isSearch = false;
        }
    }

    const searchAnime  = async(anime)=>{
        dispatch({type: LOADING});

        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc*sfw`);
        const data = await response.json();
        //console.log(data.data);
        dispatch({type: SEARCH, payload: data.data})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(search){
            searchAnime(search);
            state.isSearch = true;
        }else{
            state.isSearch = false;
            alert("Enter valid Anime name")
        }
    }

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
        <GlobalContext.Provider value={{...state,handleChange,handleSubmit,searchAnime,search}}>
            {children}
        </GlobalContext.Provider>
    )
    
}

export const useGlobalContext = () => {
    return React.useContext(GlobalContext)
}