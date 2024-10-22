import Education from "./components/sections/Education";
import Navbar from "./components/Navbar";
import Skills from "./components/sections/Skills";
import HeroSection from "./components/sections/HeroSection";
import Lottie from "lottie-react";
import StarCanvas from "./components/canvas/Stars";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import Contact from "./components/sections/Contact";
import pageLoaderAnimation from "../src/components/loader/pageLoader.json";
import BackToTopButton from './components/BackToTopButton'
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./components/utils/Themes";
import { BrowserRouter } from "react-router-dom";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const LoaderContainer = styled.div`
  height: 100vh;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  // border: 2px solid red;
`;

const LottieDiv = styled.div`
  width: 400px;
  @media (max-width: 800px) {
    width: 200px;
  }
`;

const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3200);
  }, []);

  return (
    <div>
      {loader ? (
        <LoaderContainer>
          <LottieDiv>
            <Lottie animationData={pageLoaderAnimation} loop={true} />
          </LottieDiv>
        </LoaderContainer>
      ) : (
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <Navbar />
            <Body>
              <StarCanvas />
              <div>
                <HeroSection />
                <Wrapper>
                  <Skills />
                </Wrapper>
                <Projects />
                <Wrapper>
                  <Education />
                  <Contact />
                </Wrapper>
                <Footer />
                <BackToTopButton />
              </div>
            </Body>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </div>
  );
};

export default App;
