import { StyledMain, MainAdjust, Title } from "../ReusedStyling.tsx"
import styled from "styled-components"

const Credit = styled.p`
    margin: 0 2vw;
    text-align: center;
    font-size: calc(1px + 1.5vw);
`;

export default function Credits() {
    return (
        <StyledMain>
            <MainAdjust>
                <Title>Credits</Title>

                <Credit>All contributions made by Kevin Li.</Credit>
            </MainAdjust>
        </StyledMain>
    );
}
