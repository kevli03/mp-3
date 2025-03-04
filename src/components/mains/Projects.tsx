import {StyledMain, Title, StyledH4, StyledH5, LongList } from "../ReusedStyling.tsx"
import styled from "styled-components"

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    background-color: powderblue;
`;

const Label = styled.label`
    margin: 1vh 0 0;
    font-family: Arial, Helvetica, "Helvetica Neue", sans-serif;
    font-size: calc(2px + 1.25vw);
    @media screen and (max-width: 750px) {
        font-size: calc(2px + 2.5vw);
        margin: 0.5vh 1vw 0;
    }
`;

const Number = styled.input`
    width: 80%;
    padding: 1vh 0;
    margin: 2vh auto;
    text-align: center;
    font-family: Arial, Helvetica, "Helvetica Neue", sans-serif;
    font-size: calc(2px + 1.75vw);
    background-color: white;
    @media screen and (max-width: 750px) {
        padding: 0.5vh 0;
        margin: 1.25vh auto;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
`;

const Button = styled.button`
    text-align: center;
    background-color: lightgreen;
    padding: 1vh 1vw;
    margin: 2.5vh 1vw 2vh;
    @media screen and (max-width: 750px) {
        padding: 0.5vh 1vw;
        margin: 2vh 1vw 1.25vh;
    }
`;

const Output = styled.h3`
    width: 50%;
    padding: 3.5vh 0;
    margin: 1vh auto 2.5vh;
    text-align: center;
    font-family: Arial, Helvetica, "Helvetica Neue", sans-serif;
    font-size: calc(2px + 1.75vw);
    background-color: white;
    @media screen and (max-width: 750px) {
        width: 32%;
        padding: 2vh 0;
        margin: 1vh auto 2.5vh;
    }
`;

export default function Projects() {
    return (
        <StyledMain>
            <Title>Projects</Title>

            <StyledH4>Weather Prediction Trading Pipeline</StyledH4>
            <StyledH5>Machine Learning</StyledH5>
            <LongList>
                <li>Leveraged Kalshi, a contract-based event trading exchange, for trading based on weather prediction</li>
                <li>Established a ridge regression model for API-based trading in Python using the scikit-learn and pandas libraries</li>
            </LongList>

            <StyledH4>Database Logical-to-Physical Mapping</StyledH4>
            <StyledH5>Databases</StyledH5>
            <LongList>
                <li>Implemented data insertion and interaction via data marshalling and unmarshalling in Java</li>
                <li>Mapped parsed SQL statements to appropriate actions within storage engine using the Berkeley DB API</li>
            </LongList>

            <StyledH4>Calculator</StyledH4>

            <Inputs>
                <Label>First Number:</Label><Number type={"text"}/>
                <Label>Second Number:</Label><Number type={"text"}/>
            </Inputs>

            <Buttons>
                <Button>+</Button>
                <Button>-</Button>
                <Button>*</Button>
                <Button>/</Button>
                <Button>**</Button>
                <Button>Clear</Button>
            </Buttons>

            <Output></Output>
        </StyledMain>
    );
}
