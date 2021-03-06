import React from 'react'
import ResponsiveForm from '../Components/ResponsiveForm'
import './sass/End.sass'
import { RootState } from '../Redux/store'
import Button from '../Components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { IconBad, IconGood } from '../GlobalFiles/Icons'
import { CleanQuestions } from '../Redux/QuestionsDuck'
import { useHistory } from 'react-router'
const End = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const StoreQuestions = useSelector((state: RootState) => state.questionState)
  let score = 0
  StoreQuestions.forEach((question: { correct_answer: boolean; answer: boolean }) => {
    score = question.correct_answer === question.answer ? score : score + 1
  })
  return (
    <ResponsiveForm>
      <div className="ContainerEnd">
        <div className="Scored">
          Your scored <br />
          {score}/{StoreQuestions.length}
        </div>
        <div className="loading">
          <div></div>
        </div>
        <div className="Questions">
          {StoreQuestions.map(
            (question: { question: string; correct_answer: boolean; answer: boolean }, index: number) => (
              <div key={question.question} className="Question">
                <div className="Question__number">{index + 1} -</div>
                <div className="Question__text">
                  <p>{question.question}</p>
                </div>
                <div className="Question__correct">
                  {question.correct_answer === question.answer ? <IconGood /> : <IconBad />}
                </div>
              </div>
            ),
          )}
        </div>
        <div className="PlayAgain">
          <Button
            text="Play again"
            onClick={() => {
              dispatch(CleanQuestions())
              history.push('/')
            }}
          />
        </div>
      </div>
    </ResponsiveForm>
  )
}
export default End
