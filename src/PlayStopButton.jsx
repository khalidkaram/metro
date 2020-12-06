import React from 'react';
import styled from 'styled-components';

const StyledBase = styled.button`
  width: 220px;
  height: 64px;
  cursor: pointer;
  color: #ffffff;
  font-family: Roboto;
  font-weight: 500;
  font-size: 22px;
  background: #5f85db;
  border-radius: 5px;
  border: none;
`;

const PlayStopButton = ({isActive, onClick}) => (
  <StyledBase onClick={onClick}>{isActive ? 'Stop' : 'Play'}</StyledBase>
);

export default React.memo(PlayStopButton);
