import { useGlobalContext } from "../context/global"
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Popular = () => {

  const {popularAnime,isSearch} = useGlobalContext();

  const conditionalRender =()=>{
    if(!isSearch){
      return popularAnime.map((anime) => {
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>

      })
    }
  }
  return (
    <PopularStyled>

      <div className="popular-anime">
        {conditionalRender()}
      </div>
    </PopularStyled>
  )
}

const PopularStyled = styled.div`
  display: flex;
  .popular-anime{
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 5rem;
    width : 100%;
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
    grid-gap: 2rem;
    background-color:#fff;
    border-top:5px solid #e5e7eb;
    a{
      height:300px;
      border-radius: 7px;
      border : 5px solid #e5e7eb;

    }
    a img{
      width:100%;
      height:100%;
      object-fit:cover;
      border-radius: 7px;
    }
  }
`

export default Popular