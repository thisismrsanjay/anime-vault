import React from 'react'
import { useGlobalContext } from '../context/global';
import styled from 'styled-components'
import Popular from './Popular';
import Upcoming from './Upcoming';
import Airing from './Airing';


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
    


    const switchComponent = () => {
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }

  return (
    <HomePageStyled >
        <header>
                <center>

                    <h1 >Anime-Vault</h1>
                </center>
            <div className="logo">
                
                <br/>
                                <h1>
                {rendered === 'popular' ? 'Popular Anime' : 
                        rendered === 'airing' ? 'Ongoing Anime' : 'Upcoming Anime'}
                </h1>
            </div>
            <div className="search-container">

                <div className="filter-btn popular-filter">
                    <button onClick={()=>setRendered('popular')}>Popular</button>
                </div>
                <form action="" className='serach-form' onSubmit={handleSubmit}>
                    <div className="input-control">
                        <input type="text" placeholder='Search Anime' value={search} onChange={handleChange}/>
                        <button type="submit">Search</button>
                    </div>
                    <div className="search-results">
                        {/* {conditionalRender()} */}
                    </div>
                </form>
                <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('airing')
                            getAiringAnime()
                        }}>Ongoing </button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('upcoming')
                            getUpcomingAnime()
                        }}>Upcoming </button>
                    </div>

            </div>
        </header>
        {switchComponent()}
    </HomePageStyled>
  )
}


const HomePageStyled = styled.div`
background-color:  #023047;
header{
    padding: 2rem 5rem;
    width: 60%;
    margin: 0 auto;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1530px){
        width: 95%;
    }
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
    }
    .search-container{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        button{
            display: flex;
            align-items: center;
            gap: .5rem;
            padding: .7rem 1.5rem;
            outline: none;
            border-radius: 30px;
            font-size: 1.2rem;
            background-color: #fff;
            cursor: pointer;
            transition: all .4s ease-in-out;
            font-family: inherit;
            border: 5px solid #e5e7eb;
        }
        form{
            position: relative;
            width: 100%;
            .input-control{
                position: relative;
                transition: all .4s ease-in-out;
            }
            .input-control input{
                width: 100%;
                padding:.7rem 1rem;
                border: none;
                outline: none;
                border-radius: 30px;
                font-size: 1.2rem;
                background-color: #fff;
                border: 5px solid #e5e7eb;
                transition: all .4s ease-in-out;
            }
            .input-control button{
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
}


`






export default Home