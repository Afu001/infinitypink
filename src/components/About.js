// Home.js
import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const WelcomeDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;

`;

function Home() {
    return (
        <div>
            <WelcomeDiv>
                <h1>Motive</h1>
                <p>For now you can calculate your GPA from the GPA section.</p>
            </WelcomeDiv>
            <CenteredContainer>
                <img src="cloud.gif" alt="Animated GIF" />
            </CenteredContainer>
        </div>
    );
}

export default Home;
