import React, { useEffect } from 'react';
import styled from 'styled-components';

import { boop } from './sounds';

const StyledBulb = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#fffbb9' : '#a5a0a5')};
  margin: 20px;
`;

const Bulb = ({ isActive }) => {
  const beep = () => {
    boop.play();
  };

  useEffect(() => {
    if (isActive) {
      beep();
    }
  }, [isActive]);

  return <StyledBulb isActive={isActive} />;
};

export default React.memo(Bulb);
