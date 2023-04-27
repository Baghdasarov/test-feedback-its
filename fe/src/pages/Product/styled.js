import styled from 'styled-components/macro'

export const Root = styled.div``

export const Title = styled.div`
  font-size: 20px;
`

export const List = styled.ul`
  list-style-type: none;
  width: 600px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`

export const FiltersWrapper = styled.div``

export const FilterButton = styled.button`
  cursor: pointer;
  margin-left: 8px;
  width: 120px;
  height: 24px;
  border: none;
  border-radius: 6px;

  transition: all 0.2s linear;
  font-size: 16px;
  :hover {
    scale: 1.04;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
  }

  &.active {
    background-color: #4a937b;
    color: white;
  }
`
