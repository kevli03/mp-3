import { StyledMain, MainAdjust, Title } from "../ReusedStyling.tsx"
import styled from "styled-components"

const IndexMain = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1vh 1vw;
`;

const IndexProfile = styled.div`
    width: 40%;
    margin: 1vh 1.5vw;
`;

const ImageProfile = styled.img`
    max-width: 100%;
`;

const IndexPassage = styled.p`
    align-self: center;
    width: 60%;
    margin: 0 2vw;
    text-align: center;
    font-size: calc(1px + 1.5vw);
`;

export default function Home() {
    return (
        <StyledMain>
            <MainAdjust>
                <Title>Home</Title>

                <IndexMain>
                    <IndexProfile>
                        <ImageProfile src={"/profile.png"} alt={"Me beside Morse Auditorium at Boston University"}></ImageProfile>
                    </IndexProfile>

                    <IndexPassage>My name is Kevin Li. I am a senior undergraduate student at Boston University studying Biochemistry & Molecular Biology
                        and Computer Science. I am interested in the nature and origin of life and mind. I am currently conducting origin of life research
                        for my senior honors thesis, studying autocatalytic sets. I will be applying to PhD programs later this year, seeking to continue
                        researching similar topics.<br/> <br/>This website displays my resume, detailing my experience.</IndexPassage>
                </IndexMain>
            </MainAdjust>
        </StyledMain>
    );
}
