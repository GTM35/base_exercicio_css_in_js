import styled from 'styled-components'
import { Colors } from '../../Global'

export const VagaList = styled.li`
  border: 1px solid ${Colors.Principal};
  background-color: ${Colors.secundaria};
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  a {
    border-color: ${Colors.Principal};
    background-color: ${Colors.secundaria};
    color: ${Colors.Principal};
  }

  :hover {
    background-color: ${Colors.Principal};
    color: ${Colors.secundaria};
  }
`

export const VagaTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${Colors.secundaria};
  background-color: ${Colors.Principal};
  color: ${Colors.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  :hover {
    background-color: ${Colors.Principal};
    color: ${Colors.secundaria};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
