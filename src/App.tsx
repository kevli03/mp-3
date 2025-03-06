import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/mains/Home";
import Education from "./components/mains/Education";
import Research from "./components/mains/Research";
import Experience from "./components/mains/Experience";
import Projects from "./components/mains/Projects";
import Knowledge from "./components/mains/Knowledge";
import Skills from "./components/mains/Skills";
import Credits from "./components/mains/Credits";
import Footer from "./components/Footer";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 92vw;
    margin: 0 auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: lightsteelblue;
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`;

function Root() {
    return (
        <Wrapper>
            <Header />
            <Container>
                <Nav />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/education"} element={<Education />} />
                    <Route path={"/research"} element={<Research />} />
                    <Route path={"/experience"} element={<Experience />} />
                    <Route path={"/projects"} element={<Projects />} />
                    <Route path={"/knowledge"} element={<Knowledge />} />
                    <Route path={"/skills"} element={<Skills />} />
                    <Route path={"/credits"} element={<Credits />} />
                </Routes>
            </Container>
            <Footer />
        </Wrapper>
    );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App () {
    return <RouterProvider router={router}/>
}
