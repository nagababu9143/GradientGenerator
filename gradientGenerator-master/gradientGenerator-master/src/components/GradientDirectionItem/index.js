// Write your code here
import {EachListContainer, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {data, onChangeActiveTab, isActive} = props
  const {displayText, value, directionId} = data

  const onActiveTabChange = () => {
    onChangeActiveTab(value, directionId)
  }

  return (
    <EachListContainer>
      <CustomButton
        type="button"
        value={value}
        onClick={onActiveTabChange}
        active={isActive}
      >
        {displayText}
      </CustomButton>
    </EachListContainer>
  )
}

export default GradientDirectionItem
