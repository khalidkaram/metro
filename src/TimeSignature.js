import React from 'react';
import styled from 'styled-components';

import { range } from './helpers';

const StyledBase = styled.div`
  display: flex;
  align-items: center;
  margin-left: -10%;
`;

const StyledSelectsContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
`;

const StyledSelect = styled.select`
  padding: 0.5em 0.8em;
  box-sizing: border-box;
  margin: 0;
  appearance: none;
  background-color: transparent;
  border: none;
  font-family: Roboto;
  font-size: 16px;
  padding: 16px 18px;
  cursor: pointer;
  text-align-last: center;
`;

const StyledDivider = styled.span`
  background-color: gray;
  width: 2px;
`;

const StyledLabel = styled.label`
  font-family: Roboto;
  font-size: 22px;
  margin-right: 20px;
`;

const TimeSignature = ({ numberOfBeats, beatValue, onNumberOfBeatsChange, onBeatValueChange }) => {
  const numbersOfBeats = React.useMemo(() => range(1, 16), []);
  const beatValues = React.useMemo(() => range(2, 12, 2), []);

  return (
    <StyledBase>
      <StyledLabel>Time signature : </StyledLabel>
      <StyledSelectsContainer>
        <StyledSelect onChange={onNumberOfBeatsChange}>
          {numbersOfBeats.map((beat) => (
            <option key={beat} {...(numberOfBeats === beat ? { selected: true } : {})}>
              {beat}
            </option>
          ))}
        </StyledSelect>
        <StyledDivider />
        <StyledSelect onChange={onBeatValueChange}>
          {beatValues.map((value) => (
            <option key={value} {...(beatValue === value ? { selected: true } : {})}>
              {value}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectsContainer>
    </StyledBase>
  );
};

export default TimeSignature;
