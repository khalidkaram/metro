import styled from 'styled-components'

export const PlayStopButton = styled.button<{ $isActive: boolean }>`
  width: 220px;
  height: 64px;
  cursor: pointer;
  color: #ffffff;
  font-family: Roboto;
  font-weight: 500;
  font-size: 22px;
  background: ${({ $isActive }) => ($isActive ? '#EB5757' : '#5f85db')};
  border-radius: 5px;
  border: none;
`
