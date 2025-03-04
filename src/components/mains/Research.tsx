import { StyledMain, Title } from "../ReusedStyling.tsx"
import styled from "styled-components"

const ResearchTitle = styled.h4`
    text-align: center;
    margin: 2vh 2vw 1vh;
    font-size: calc(1px + 2.5vw);
`;

const ResearchPassage1 = styled.p`
    margin: 1vh 2vw;
    text-align: center;
    font-size: calc(1px + 1.5vw);
`;

const ResearchMain = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1vh 1vw;
`;

const ResearchData = styled.div`
    width: 60%;
    margin: 0 1.5vw;
`;

const ImageData = styled.img`
    max-width: 100%;
`;

const ResearchPassage2 = styled.p`
    align-self: center;
    width: 40%;
    margin: 0 2vw;
    text-align: center;
    font-size: calc(1px + 1.5vw);
`;

export default function Research() {
    return (
        <StyledMain>
            <Title>Research</Title>

            <ResearchTitle>Analysis of the Structure of Simple Autocatalytic Metabolic Networks</ResearchTitle>

            <ResearchPassage1>An unanswered question in origin of life research is how complex molecules could have formed in high
                concentrations in primitive conditions. Autocatalytic sets have been proposed as a solution to this problem. An autocatalytic
                set comprises a set of molecules interacting in chemical reactions, each of which is catalyzed by a molecule within the set.
                In this manner, the set is able to sustain the production of its constituents and build complex molecules. We have built
                artificial chemistries for computational modeling of catalytic networks in order to investigate properties of autocatalytic sets
                built from simple molecules. One aspect we have investigated is the change in autocatalytic set size with varying catalytic
                probability, defined as the probability of any given molecule in the network to catalyze any given reaction in the network.
                This probability is analogous to the <strong>sparsity</strong> of a catalytic matrix encompassing all possible combinations of
                molecules (candidate catalysts) and reactions.</ResearchPassage1>

            <ResearchMain>
                <ResearchData>
                    <ImageData src={"/data.png"} alt={"Autocatalytic set size as a function of sparsity"}></ImageData>
                </ResearchData>

                <ResearchPassage2>The attached figure displays a graph of autocatalytic set size (presented
                    as the fraction of the number of reactions in the autocatalytic set over the number of all possible reactions in the network)
                    against catalytic matrix sparsity. We observe a sigmoidal shape, which is consistent with previous research that has
                    commented on <em>phase transitions</em> in autocatalytic set size.</ResearchPassage2>
            </ResearchMain>
        </StyledMain>
    );
}
