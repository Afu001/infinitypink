// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 1rem;
  text-align: center;
  position: fixed; /* Fixed positioning */
  bottom: 0; /* Fix at the bottom */
  width: 100%; /* Full width */
`;

function Footer() {
    return (
        <FooterContainer>
            &copy; {new Date().getFullYear()} P I N K  L O G I C
            <div>All Rights Reserved By Khawaja Aswad Ul Husnain</div>
        </FooterContainer>
    );
}

export default Footer;
