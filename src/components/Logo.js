import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 10px;
  color: white;
`;

function Logo() {
    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <LogoText>P I N K  L O G I C</LogoText>
        </Link>
    );
}

export default Logo;
