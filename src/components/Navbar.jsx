import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Bio } from "./data/constants";
import { MenuRounded } from "@mui/icons-material";
import logo from "./images/port-logo.png";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  @media (max-width: 600px) {
    padding: 0px 15px;
  }
`;
const NavLogo = styled(LinkR)`
  width: 80%;
  font-weight: 500;
  font-size: 16px;
  padding: 0 6px;
  text-decoration: none;
  color: inherit;
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  justify-content: flex-end;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const GithubButton = styled.a`
border : 1px solid ${({ theme }) => theme.primary};
  color : white;
display : flex;
align-items : center;
justify-content :center;
border-radius :20px;
cursor : pointer;
padding :12px 20px;
font-size :16px
font-weight :500;
transition : all 0.6s ease-in-out;
text-decoration : none;

&:hover {
  background-color : ${({ theme }) => theme.primary};
  color : white;
}
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  height: 100 %;
  display: flex;
  align-items: center;
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  // border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Img = styled.img`
  width: 140px;
  height: 60px;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavLink href="#About" >
            <Img src={logo} alt="logo"  />
          </NavLink>
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            <NavLink href="#Contact">Contact</NavLink>
            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{ background: theme.primary, color: theme.text_primary }}
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_Blank">
            {" "}
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
