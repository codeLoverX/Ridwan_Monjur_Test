import styled from 'styled-components'

let Description = styled.div`
    display: flex; 
    flex-wrap: wrap;
    @media (max-width: ${({ theme }) => theme.tablet}) {
        max-height: min-content;
        justify-content: center;
    }
`

Description.Preview = styled.span` 
    text-align: center;
    position: reative;
    & img {
        object-fit: cover;
        margin: auto
        max-width: 80%;
        max-height: 90%;
    }
    @media (min-width: ${({ theme }) => theme.tablet}) {
        flex-basis: 50%;
        max-height: 70vh;
    }
`

Description.ControlPreview = styled.span`
    width: 150px;
    height: 150px;
    flex-basis: 100%;  
    text-align: center;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 5px;
        background: ${({ theme }) => `${theme.colors.hoverBg}`}; 
    }
    cursor-pointer;
    position: reative;
    & img {
        object-fit: cover;
        width: 100%;
        margin: auto; 
        cursor: pointer;
    }
    @media (max-width: ${({ theme }) => theme.tablet}) {
        flex-basis: 100%; 
        oveflow-x: scroll;
        margin: 0 10%; 
      
    }
`

Description.TextSection = styled.span`
    flex-basis: 100%;  
    max-height: min-content; 
    @media (max-width: ${({ theme }) => theme.tablet}) {
        flex-basis: 100%; 
        text-align: center;
    }
`

Description.AddToCart = styled.button`
    display: inline-block;
    cursor: pointer;
    padding: 15px;
    width: 250px;
    text-align: center;
    font-size: 15px;
    margin-right: 5px;
    margin-top: 10px;
    border: 0px solid black;
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.light}`};
    &:hover{
        background-color:  ${({ theme }) => `${theme.colors.hoverBg}`};
        color: black;
    }  
`

Description.AddToCartError = styled.div`
    color: red;
    margin-top: 5px;
    font-size: 12px;
`

Description.DescriptionText = styled.span`
    font-size: medium; 
    font-weight: 600; 
    padding-top: 15px;
`

export default Description