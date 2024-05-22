import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Button from '../Buttons'
import GameResultView from '../GameResultView'
import 'reactjs-popup/dist/index.css'

import {
  MainContainer,
  ScoreContainer,
  ItemsContainer,
  Heading,
  ScoreCardContainer,
  ParagraphScroe,
  ScoreSpan,
  ItemsImageContainer,
  PopupContainer,
  PopupButton,
  RulesImageConstainer,
  RulesImage,
  CloseLineButton,
  CloseLineContainer,
} from './styledcomponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    score: 0,
    resultMessae: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, opponentChoice, resultMessae} = this.state
    const {id, image} = opponentChoice
    return (
      <GameResultView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessae={resultMessae}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, image) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevstate => ({
        showResult: true,
        myChoice: {id, image},
        opponentChoice: choicesList[number],
        score: prevstate.score - 1,
        resultMessae: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevstate => ({
        showResult: true,
        myChoice: {id, image},
        opponentChoice: choicesList[number],
        score: prevstate.score + 1,
        resultMessae: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevstate => ({
        showResult: true,
        myChoice: {id, image},
        opponentChoice: choicesList[number],
        score: prevstate.score + 1,
        resultMessae: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevstate => ({
        showResult: true,
        myChoice: {id, image},
        opponentChoice: choicesList[number],
        score: prevstate.score - 1,
        resultMessae: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevstate => ({
        showResult: true,
        myChoice: {id, image},
        opponentChoice: choicesList[number],
        score: prevstate.score - 1,
        resultMessae: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevstate => ({
        showResult: true,
        myChoice: {id, image},
        opponentChoice: choicesList[number],
        score: prevstate.score + 1,
        resultMessae: 'YOU WON',
      }))
    } else {
      this.setState(prevstate => ({
        showResult: true,
        myChoice: {id, image},
        opponentChoice: choicesList[number],
        resultMessae: 'IT IS DRAW',
      }))
    }
  }

  onGetImage = () => {
    const {choicesList} = this.props
    return (
      <ItemsImageContainer>
        {choicesList.map(each => (
          <Button
            key={each.id}
            buttonDetails={each}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemsImageContainer>
    )
  }

  render() {
    const {showResult, score, myChoice, opponentChoice} = this.state

    return (
      <MainContainer>
        <ScoreContainer>
          <ItemsContainer>
            <Heading>
              ROCK
              <br /> PAPER <br /> SCISSORS
            </Heading>
          </ItemsContainer>
          <ScoreCardContainer>
            <ParagraphScroe>Score</ParagraphScroe>
            <ScoreSpan>{score}</ScoreSpan>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.onGetResult() : this.onGetImage()}
        <PopupContainer>
          <Popup modal trigger={<PopupButton type="button">Rules</PopupButton>}>
            {close => (
              <RulesImageConstainer>
                <CloseLineContainer>
                  <CloseLineButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseLineButton>
                </CloseLineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png0"
                  alt="rules"
                />
              </RulesImageConstainer>
            )}
          </Popup>
        </PopupContainer>
      </MainContainer>
    )
  }
}

export default Game
