import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RootState } from '../Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { UpdateQuestion } from '../Redux/QuestionsDuck'
// import queryString from 'query-string'
import ResponsiveForm from '../Components/ResponsiveForm'
import './sass/Question.sass'
import Button from '../Components/Button'
const Home = () => {
  let RouteParams: { index: string } = useParams()
  const CurrentQuestionNumber = parseInt(RouteParams.index)
  const CurrentQuestionIndex = CurrentQuestionNumber - 1
  const dispatch = useDispatch()
  const history = useHistory()
  const StoreQuestions = useSelector((state: RootState) => state.questionState)
  let CurrentQuestion = StoreQuestions[CurrentQuestionIndex]
  const saveAnswer = (value: boolean) => {
    dispatch(UpdateQuestion(CurrentQuestionIndex, value))
    history.push(
      StoreQuestions.length === CurrentQuestionNumber ? '/End' : '/Question/' + (CurrentQuestionNumber + 1).toString(),
    )
  }

  return (
    <ResponsiveForm>
      <div className="ContainerQuestion">
        <div className="Area">
          <h3>{CurrentQuestion.category}</h3>
        </div>
        <div className="Question">
          <h3>{CurrentQuestion.question}</h3>
          <div className="Question__Buttons">
            <Button onClick={() => saveAnswer(true)} text="true" />
            <Button onClick={() => saveAnswer(false)} text="false" />
          </div>
        </div>
        <div className="Pages">
          {CurrentQuestionNumber} of {StoreQuestions.length}
        </div>
      </div>
    </ResponsiveForm>
  )
}
export default Home
