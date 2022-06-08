import React from 'react';
import styled from 'styled-components';

const Home = () => {
  const hello = 'Hello world!';
  return <H1>{hello}</H1>;
};

const H1 = styled.h1`
  margin: 0;
`;
export default Home;
