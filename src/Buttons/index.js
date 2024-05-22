import {ButtonContainer, ButtonImage, ImageItem} from './styledComponents'

const Button = props => {
  const {buttonDetails, onGetId} = props
  const {id, image} = buttonDetails
  const lowercaseid = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, image)
  }

  return (
    <ButtonContainer>
      <ButtonImage
        type="button"
        data-testid={`${lowercaseid}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={image} alt={id} />
      </ButtonImage>
    </ButtonContainer>
  )
}

export default Button
