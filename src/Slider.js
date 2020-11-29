import React from 'react';
import styled from 'styled-components';

const StyledRangeInput = styled.input`
  -webkit-appearance: none;
  margin-top: 20px;
  width: 60%;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    background-color: #5f85db;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -8px;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background: #a8b1fb;
    height: 5px;
  }
`;

const Slider = ({ bpm, onBpmChange }) => (
  <StyledRangeInput type="range" id="bpm" name="bpm" min="0" max="300" value={bpm} onChange={onBpmChange} step="5" />
);

export default React.memo(Slider);
