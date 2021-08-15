import styled from 'styled-components';

export const RangeInput = styled.input`
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
