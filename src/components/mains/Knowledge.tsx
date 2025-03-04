import {StyledMain, Title, StyledH4, LongList } from "../ReusedStyling.tsx"

export default function Knowledge() {
    return (
        <StyledMain>
            <Title>Areas of Knowledge</Title>

            <StyledH4>Biology</StyledH4>
            <LongList>
                <li>Biochemistry</li>
                <li>Molecular biology</li>
                <li>Cell biology</li>
                <li>Genetics</li>
                <li>Immunology</li>
                <li>Virology</li>
                <li>Neurobiology</li>
                <li>Evolutionary biology</li>
                <li>Biophysics</li>
                <li>Bioinformatics</li>
                <li>Computational biology</li>
                <li>Systems biology</li>
                <li>Synthetic biology</li>
                <li>Origin of life</li>
                <li>Artificial life</li>
            </LongList>

            <StyledH4>Chemistry</StyledH4>
            <LongList>
                <li>Organic chemistry</li>
                <li>Physical biochemistry</li>
            </LongList>

            <StyledH4>Computer Science</StyledH4>
            <LongList>
                <li>Algorithms</li>
                <li>Artificial intelligence</li>
                <li>Machine learning</li>
                <li>Deep learning</li>
                <li>Reinforcement learning</li>
                <li>Data science</li>
                <li>Computer systems</li>
                <li>Databases</li>
                <li>Distributed systems</li>
                <li>Computer graphics</li>
            </LongList>

            <StyledH4>Mathematics</StyledH4>
            <LongList>
                <li>Calculus</li>
                <li>Linear algebra</li>
                <li>Probability</li>
                <li>Statistics</li>
                <li>Information theory</li>
                <li>Graph theory</li>
                <li>Game theory</li>
                <li>Complex systems</li>
            </LongList>

            <StyledH4>Physics</StyledH4>
            <LongList>
                <li>Classical mechanics</li>
                <li>Electromagnetism</li>
                <li>Statistical mechanics</li>
            </LongList>
        </StyledMain>
    );
}
