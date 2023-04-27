import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export const Root = styled(NavLink)`
  text-align: start;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.2s linear;
  :hover {
    scale: 1.04;
  }
`

export const Name = styled.div``

export const CountWrapper = styled.div``

export const Count = styled.span``

export const Button = styled.button`
  cursor: pointer;
  margin-left: 8px;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 6px;
  background-color: #4a937b;
  color: white;
  transition: all 0.2s linear;
  font-size: 18px;
  :hover {
    scale: 1.04;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
  }
`
