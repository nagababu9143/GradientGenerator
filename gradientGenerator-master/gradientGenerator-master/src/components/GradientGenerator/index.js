import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem/index'
import {
  AppComponent,
  MainComponent,
  HeadingComponent,
  SubHeadingComponent,
  ListContainer,
  InputColorCard,
  ColorInput,
  CustomButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b ',
    gradientDirection: gradientDirectionsList[0].value,
    f: '#8ae323',
    s: '#014f7b ',
    dId: gradientDirectionsList[0].directionId,
    g: gradientDirectionsList[0].value,
  }

  OnFirstColorChange = event => {
    this.setState({firstColor: event.target.value})
  }

  onSecondColorChange = event => {
    this.setState({secondColor: event.target.value})
  }

  onChangeActiveTab = (value, directionId) => {
    this.setState({gradientDirection: value, dId: directionId})
  }

  onClickGenerate = () => {
    const {firstColor, secondColor, gradientDirection} = this.state
    this.setState({
      f: firstColor,
      s: secondColor,
      g: gradientDirection,
    })
  }

  render() {
    const {f, s, g, firstColor, secondColor, dId} = this.state
    return (
      <AppComponent f={f} s={s} g={g} data-testid="gradientGenerator">
        <MainComponent>
          <HeadingComponent>Generate a CSS Color Gradient</HeadingComponent>
          <SubHeadingComponent>Choose Direction</SubHeadingComponent>

          <ListContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                data={each}
                onChangeActiveTab={this.onChangeActiveTab}
                isActive={each.directionId === dId}
              />
            ))}
          </ListContainer>
          <SubHeadingComponent>Pick the Colors</SubHeadingComponent>
          <InputColorCard>
            <div>
              <SubHeadingComponent>{firstColor}</SubHeadingComponent>
              <ColorInput
                type="color"
                value={firstColor}
                onChange={this.OnFirstColorChange}
              />
            </div>
            <div>
              <SubHeadingComponent>{secondColor}</SubHeadingComponent>
              <ColorInput
                type="color"
                value={secondColor}
                onChange={this.onSecondColorChange}
              />
            </div>
          </InputColorCard>
          <CustomButton onClick={this.onClickGenerate}>Generate</CustomButton>
        </MainComponent>
      </AppComponent>
    )
  }
}

export default GradientGenerator
