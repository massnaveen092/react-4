import {
  ShowResultContainer,
  ResultimageContainer,
  ResultTextContainer,
  ResultText,
  ResultImageItem,
  ResultButtonContainer,
  PlayAginButon,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, opponentChoice, resultMessae, playAgain} = props
  const {id, image} = opponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultimageContainer>
        <ResultTextContainer>
          <ResultText>YOU</ResultText>
          <ResultImageItem src={myChoice[1]} alt="your choice" />
        </ResultTextContainer>
        <ResultTextContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImageItem src={image} alt="opponent choice" />
        </ResultTextContainer>
      </ResultimageContainer>
      <ResultText>{resultMessae}</ResultText>
      <ResultButtonContainer>
        <PlayAginButon type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </PlayAginButon>
      </ResultButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResultView
