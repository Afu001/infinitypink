import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const NavbarContainer = styled.nav`
  background-color: ${props => props.theme.colors.background};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 20px; /* Add margin-right to create spacing between links */
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

function Navbar() {
    return (
        <NavbarContainer>
            <Logo />
            <div>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
                <NavbarLink to="/gpa">GPA</NavbarLink>
            </div>
        </NavbarContainer>
    );
}

export default Navbar;
