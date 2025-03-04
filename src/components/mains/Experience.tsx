import { StyledMain, Title, StyledH4, StyledH5, Details, LongList } from "../ReusedStyling.tsx"
import { Link } from "react-router";

export default function Experience() {
    return (
        <StyledMain>
            <Title>Experience</Title>

            <StyledH4>BU iGEM Team Member</StyledH4>
            <StyledH5>Boston University</StyledH5>
            <Details>
                <p>Boston, MA, USA</p>
                <p>April 2024 - October 2024</p>
            </Details>
            <LongList>
                <li>1 of 5 members of the BU undergraduate team for the 2024 iGEM international synthetic biology competition</li>
                <li>Contributed to the creation of a device incorporating microbial biosensors for the detection of heavy metals in liquid samples</li>
                <li>As the lead of the biology team, spearheaded the ideation, production, validation, and investigation of bacterial biosensors</li>
                <li>As the lead of the software team, created a model to quantify heavy metal concentration from biosensor fluorescence output and a mapping algorithm for sample selection</li>
                <li>Presented work at the 2024 iGEM Grand Jamboree in Paris, winning an iGEM Gold Medal</li>
                <li>More information can be found here: <Link to={"https://2024.igem.wiki/bostonu/"}>BostonU iGEM 2024</Link> and here: <Link to={"https://gitlab.igem.org/2024/software-tools/bostonu"}>BostonU 2024 Software</Link></li>
            </LongList>

            <StyledH4>Viral Vaccines R&D Intern</StyledH4>
            <StyledH5>Pfizer</StyledH5>
            <Details>
                <p>Pearl River, NY, USA</p>
                <p>June 2023 - August 2023</p>
            </Details>
            <LongList>
                <li>Contributed to the improvement and validation of molecular assays for viral vaccine investigation</li>
                <li>Supported molecular cloning project for vaccine production</li>
                <li>Presented work at department-wide meeting</li>
            </LongList>
        </StyledMain>
    );
}
