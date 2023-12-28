import React from 'react'
import { useGlobalContext } from '../context/global';

const Home = () => {


    const {handleSubmit, 
        search, 
        searchAnime,
        handleChange ,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext()

    const [rendered,setRendered] = React.useState('popular');
    


    const switchComponent = ()=>{
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered}/>
            default:
                return <Popular rendered={rendered}/>
        }
    }
  return (
    <div >
        <header>

            <div className="logo">
                <h1>
                {rendered === 'popular' ? 'Popular Anime' : 
                        rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}
                </h1>
            </div>
            <div className="search-container">

                <div className="filter-btn popular-filter">
                    <button onClick={()=>setRendered('popular')}>Popular</button>
                </div>
                <form action="" className='serach-form'>
                    <div className="input-control">
                        <input type="text" placeholder='Search Anime' value={search} onChange={handleChange}/>
                        <button type="submit">Search</button>
                    </div>
                </form>
                <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('airing')
                            getAiringAnime()
                        }}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('upcoming')
                            getUpcomingAnime()
                        }}>Upcoming</button>
                    </div>

            </div>
        </header>

    </div>
  )
}

export default Home