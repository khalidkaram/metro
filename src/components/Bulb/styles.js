import styled from 'styled-components';

export const Bulb = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({isActive}) => (isActive ? '#fffbb9' : '#a5a0a5')};
  margin: 20px;
`;
