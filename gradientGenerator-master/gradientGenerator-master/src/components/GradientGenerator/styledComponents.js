// Style your elements here
import styled from 'styled-components'

export const AppComponent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.g},
    ${props => props.f},
    ${props => props.s}
  );
`

export const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeadingComponent = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
`

export const SubHeadingComponent = styled.p`
  color: #ededed;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
`
export const InputColorCard = styled.div`
  display: flex;
  align-items: center;
`

export const ColorInput = styled.input`
  margin: 20px;
`

export const CustomButton = styled.button`
  height: 30px;
  width: 100px;
  margin-top: 30px;
  border: 0;
  border-radius: 5px;
  background-color: #00c9b7;
  color: #1e293b;
`
