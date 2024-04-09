import styled from 'styled-components'
import { Colors } from '../../Global'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Colors.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 8px;
  }
`

export const ButtonSearch = styled.button`
  background-color: ${Colors.Principal};
  border: 1px solid ${Colors.Principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Colors.secundaria};
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 0;
  }
`

export const Input = styled.input`
  padding: 0 16px;
  outline-color: ${Colors.Principal};
`
