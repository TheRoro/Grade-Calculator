import styled from 'styled-components';

export const GradesWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const UpperContainer = styled.div`
    width: 100%;
    height: 25vh;
    min-height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: #fff;
`

export const UpperContainerRow = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 600px) {
        justify-content: space-between;
    }
`

export const UpperContainerTitle = styled.h1`
    font-size: 2.6rem;
    margin: 0;
`

export const GradesRowContainer = styled.div`
    width: 100%;
    height: auto;
`

export const ButtonContainer = styled.div`
    width: 100%;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
`

export const GradeRowTitle = styled.div`
    min-height: 50px;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    margin: 2vh 10vw;
    font-weight: 500;
    font-size: 1.3rem;
    @media (max-width: 600px) {
        margin: 2vh 5vw;
    }
`

export const GradeRow = styled.div`
    min-height: 50px;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    margin: 2vh 10vw;
    background: ${({color}) => color};
    border-radius: 5px;
    font-weight: 700;
    @media (max-width: 600px) {
        margin: 2vh 5vw;
    }
`

// Elements

export const CalcButton = styled.button`
    background: #5C82FF;
    border-radius: 5px;
    border: none;
    padding: .75rem 1.25rem;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    margin: 1rem;
    transition: all .2s ease-in-out;
    &:hover {
        cursor: pointer;
        background: #3D62DA;
    }
    &:active {
        cursor: pointer;
        background: #5C82FF;
    }
    &:focus {
        outline: none;
        background: #5C82FF;
    }
`

export const Input = styled.input`
    background: #fff;
    border-radius: 5px;
    width: 60px;
    height: 30px;
    border: 1px solid #4b4b4b;
    font-family: 'Montserrat', sans-serif;
    color: #4b4b4b;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance: textfield;
    }
`

export const CloseButton = styled.div`
    background: #FF5C5C;
    border-radius: 50px;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;
    &:hover {
        cursor: pointer;
        background: #E43B3B;
    }
`

export const XIcon = styled.span`
    color: #fff;
    font-weight: 500;
    font-size: 2rem;
`

export const CreateButton = styled.div`
    background: #5C82FF;
    border-radius: 50px;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;
    &:hover {
        cursor: pointer;
        background: #3F66E9;
    }
`

export const PlusIcon = styled.span`
    color: #fff;
    font-weight: 500;
    font-size: 2.4rem;
`

type ResultsProps = {
    color?: string; ///Passing Optional Props
};

export const ModalWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
    &:hover {
        cursor: pointer;
    }
`

export const Modal = styled.div<ResultsProps>`
    position: absolute;
    height: 40%;
    min-height: 220px;
    width: 31%;
    min-width: 400px;
    border-radius: 5px;
    opacity: 1;
    background: ${({color}) => color};
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    transition: all .2s ease-in-out;
    &:hover {
        filter: brightness(95%);
        cursor: pointer;
    }
    @media (max-width: 600px) {
        justify-content: center;
        height: 35%;
        width: 30%;
        min-width: 300px;
    }
`

export const ModalTitle = styled.h1`
    margin: 0;
    font-size: 2.4rem;
    padding-top: .8em;
    margin-bottom: 1em;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 2rem;
        padding: 3vh;
        margin-bottom: 1vh;
    }
`

export const ModalGradeText = styled.p`
    margin: 0;
    font-size: 1.1rem;
    padding: 2em;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 1rem;
        padding: 3vh;
    }
`

export const GradeText = styled.span`
    margin: 0;
    font-size: 1.15rem;
    text-align: center;
    display: inline;
    padding: .2em;
    font-weight: 700;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`

export const ModalMessage = styled.p`
    margin: 0;
    font-size: 1.1rem;
    padding: 1.5rem;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 1rem;
        padding: 3vh;
    }
`