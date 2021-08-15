import styled from 'styled-components';

export const TimeSignature = styled.div`
  display: flex;
  align-items: center;
  margin-left: -10%;
`;

export const SelectsContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
`;

export const Select = styled.select`
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

export const Divider = styled.span`
  background-color: gray;
  width: 2px;
`;

export const Label = styled.label`
  font-family: Roboto;
  font-size: 22px;
  margin-right: 20px;
`;
