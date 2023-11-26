// Style your elements here
import styled from 'styled-components'

export const EachListContainer = styled.li`
  margin: 10px;
`

export const CustomButton = styled.button`
  height: 30px;
  width: 80px;
  border: 0;
  border-radius: 5px;
  opacity: ${props => (props.active ? '1' : '0.5')};
  cursor: pointer;
`
