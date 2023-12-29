import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800&display=swap');



*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Exo 2', sans-serif;


    }

    body{
        color: #8ecae6;
        
        font-size: 1.6rem;
       
        &::-webkit-scrollbar{
            width: 7px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #27AE60;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #EDEDED;
        }
    }
    
`;


export default GlobalStyle;