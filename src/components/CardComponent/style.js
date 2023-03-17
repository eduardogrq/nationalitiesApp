import styled from 'styled-components';


export const CardContainer = styled.div`
    align-items: center;
    background-color: #f1f5f9;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export const CardObject = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 7px 7px 7px #475569;
    height: 400px;
    width: 700px;
`

export const HeaderCard = styled.div`
    align-items: center;
    background: #e2e8f0;
    border-bottom: 1px solid #cbd5e1;
    border-radius: 8px 8px 0px 0px;
    padding: 10px;
    display: flex;
    height: 25%;
    justify-content: center;
`

export const ImageWrapper = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #cbd5e1;
    display: flex;
    height: 130px;
    justify-content: center;
    padding: 4px;
    position: relative;
    top: 40%;
    width: 130px;
`

export const Image = styled.img`
    border-radius: 50%;
    height: 100%;
    width: 100%;
`
export const InfoContainer = styled.div`
    height: 70%;
    padding-top: 75px;
`

export const IconsWrapper = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center; 
    margin-top: 10px;
`