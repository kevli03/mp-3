import { StyledMain, MainAdjust, Title, StyledH4, StyledH5, Details } from "../ReusedStyling.tsx"

export default function Education() {
    return (
        <StyledMain>
            <MainAdjust>
                <Title>Education</Title>

                <StyledH4>Boston University</StyledH4>
                <StyledH5>Bachelor of Arts in Biochemistry & Molecular Biology</StyledH5>
                <StyledH5>Bachelor of Arts in Computer Science</StyledH5>
                <Details>
                    <p>Boston, MA, USA</p>
                    <p>September 2021 - May 2025</p>
                    <p>GPA: 3.67</p>
                </Details>

                <StyledH4>Bergen County Academies</StyledH4>
                <StyledH5>Academy for the Advancement of Science and Technology</StyledH5>
                <Details>
                    <p>Hackensack, NJ, USA</p>
                    <p>September 2017 - June 2021</p>
                </Details>
            </MainAdjust>
        </StyledMain>
    );
}
