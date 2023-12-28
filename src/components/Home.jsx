import React from 'react'

const Home = () => {


    const [rendered,setRendered] = React.useState('popular');
    const [search,setSearch] = React.useState('');

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e)=>{
        
    }


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

                    </div>
                </form>


            </div>
        </header>

    </div>
  )
}

export default Home