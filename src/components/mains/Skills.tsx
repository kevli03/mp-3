import {StyledMain, Title, StyledH4, StyledH5, LongList } from "../ReusedStyling.tsx"

export default function Skills() {
    return (
        <StyledMain>
            <Title>Skills</Title>

            <StyledH4>Experimental</StyledH4>

            <StyledH5>Microbiology</StyledH5>
            <LongList>
                <li>Molecular cloning</li>
                <li>Bacterial cell culture</li>
                <li>Miniprep</li>
                <li>PCR</li>
                <li>Agarose gel electrophoresis</li>
                <li>SDS-PAGE</li>
                <li>Western blotting</li>
                <li>Gel extraction</li>
                <li>Plasmid design</li>
                <li>Restriction enzyme digestion</li>
                <li>HiFi assembly</li>
                <li>Bacterial transformation</li>
                <li>Protein purification</li>
            </LongList>

            <StyledH5>Cell Culture</StyledH5>
            <LongList>
                <li>Mammalian cell culture</li>
                <li>Transfection</li>
                <li>Viral assays (infectivity, neutralization)</li>
            </LongList>

            <StyledH5>Organic Chemistry</StyledH5>
            <LongList>
                <li>Organic synthesis</li>
                <li>Spectroscopy</li>
                <li>NMR</li>
            </LongList>

            <StyledH4>Computational</StyledH4>

            <StyledH5>Programming Languages</StyledH5>
            <LongList>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Go</li>
                <li>R</li>
                <li>OCaml</li>
                <li>x86 ASM</li>
            </LongList>

            <StyledH5>Libraries & Frameworks</StyledH5>
            <LongList>
                <li>NumPy</li>
                <li>pandas</li>
                <li>Matplotlib</li>
                <li>scikit-learn</li>
                <li>NetworkX</li>
                <li>COBRApy</li>
                <li>Shapely</li>
                <li>OpenGL</li>
                <li>SEPIA</li>
            </LongList>

            <StyledH5>Tools</StyledH5>
            <LongList>
                <li>Git</li>
                <li>Linux</li>
                <li>LaTeX</li>
                <li>Jupyter Notebook</li>
                <li>Microsoft Excel</li>
                <li>SnapGene</li>
                <li>PyMOL</li>
                <li>MongoDB</li>
            </LongList>

            <StyledH4>Professional</StyledH4>

            <StyledH5>Languages</StyledH5>
            <LongList>
                <li>Mandarin Chinese</li>
                <li>Korean</li>
                <li>Japanese</li>
            </LongList>
        </StyledMain>
    );
}
