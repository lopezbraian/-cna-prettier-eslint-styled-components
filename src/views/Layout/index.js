import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled.div`
  background: #fafafa;
  min-height: 100vh;
  height: 100%;
`;

export default Layout;
